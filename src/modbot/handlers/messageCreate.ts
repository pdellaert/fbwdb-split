import modCommands from '../../commands/modCommands';
import { client, DEBUG_MODE } from '../index';
import { commandHandler } from '../../lib/handlers/commandHandler';

module.exports = {
    event: 'messageCreate',
    executor: async (msg) => {
        commandHandler(msg, modCommands, client, DEBUG_MODE);
    },
};
