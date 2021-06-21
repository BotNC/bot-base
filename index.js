const Discord = require('discord.js');
const fs = require('fs');
const dotenv = require('dotenv');

dotenv.config();

const client = new Discord.Client();

client.commands = new Discord.Collection();

fs.readdir('./commands', (err, files) => {
  if (err)
    console.error(err);

  for (const file of files) {
    if (file.endsWith('.js')) {
      const command = require(`./commands/${file}`);

      client.commands.set(command.name, command);
    }
  }
});

const handleMessage = require('./handlers/message');

client.on('ready', () => console.log('Ready.'));

client.on('message', (message) => handleMessage(message, client.commands, client));

client.login(process.env.TOKEN);