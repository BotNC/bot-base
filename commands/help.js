module.exports = {
  name: 'help',
  description: 'Shows you all of the commands.',

  execute(message, args, client) {
    let helpStr = '```\n';
    
    for (const command of client.commands.array()) {
      helpStr += `${command.name}: ${command.description}`;
    }

    helpStr += '```';

    message.channel.send(helpStr);
  }
};