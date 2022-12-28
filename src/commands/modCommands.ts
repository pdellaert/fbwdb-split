import { BaseCommandDefinition } from '../lib/command';
import Logger from '../lib/logger';
import { ban } from './moderation/ban';
import { deleteWarn } from './moderation/warn/deleteWarn';
import { faq } from './moderation/faq';
import { listWarnings } from './moderation/warn/listWarnings';
import { roleassignment } from './moderation/roleassignment';
import { rules } from './moderation/rules';
import { sticky } from './moderation/sticky';
import { temporarycommandedit } from './moderation/temporaryCommandEdit';
import { timeout } from './moderation/timeout';
import { unban } from './moderation/unban';
import { untimeout } from './moderation/untimeout';
import { warn } from './moderation/warn/warn';
import { welcome } from './moderation/welcome';
import { whois } from './moderation/whois';

const commands: BaseCommandDefinition[] = [
    ban,
    deleteWarn,
    faq,
    listWarnings,
    roleassignment,
    rules,
    sticky,
    temporarycommandedit,
    timeout,
    unban,
    untimeout,
    warn,
    welcome,
    whois,
];

const modCommands: { [k: string]: BaseCommandDefinition } = {};

for (const def of commands) {
    for (const name of (typeof def.name === 'string' ? [def.name] : def.name)) {
        if (modCommands[name]) {
            Logger.warn(`Duplicate command/alias inserted: ${name}`);
        }
        modCommands[name] = def;
    }
}

export default modCommands;
