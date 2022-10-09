import userCommands from '../../commands/userCommands';
import { client, DEBUG_MODE } from '../index';
import { commandHandler } from '../../lib/handlers/commandHandler';

module.exports = {
    event: 'messageCreate',
    executor: async (msg) => {
        commandHandler(msg, userCommands, client, DEBUG_MODE);
    },
};
