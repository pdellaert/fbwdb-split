import userCommands from '../../commands/userCommands';
import modCommands from '../../commands/modCommands';
import Logger from '../../lib/logger';
import { client, DEBUG_MODE } from '../index';
import { commandHandler } from '../../lib/handlers/commandHandler';

module.exports = {
    event: 'messageCreate',
    executor: async (msg) => {
        if (msg.content.startsWith('.')) {
            const usedCommand = msg.content.substring(1, msg.content.includes(' ') ? msg.content.indexOf(' ') : msg.content.length).toLowerCase();
            if (userCommands[usedCommand]) {
                Logger.debug('Mod Create Message - Recognized user command, skipping processing');
                return;
            }
        }

        commandHandler(msg, modCommands, client, DEBUG_MODE);
    },
};
