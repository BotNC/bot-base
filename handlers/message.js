const { prefix } = require('../config.json');

module.exports = (message, commands, client) => {
  const tokens = message.content.split(' ');
  const command = tokens[0].toLowerCase().slice(prefix.length);
  const args = tokens.slice(1);

  for (const commandIter of commands.array()) {
    if (commandIter.name === command) {
      commandIter.execute(message, args, client);
      break;
    }
  }
};