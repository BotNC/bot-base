## BotBase
# A simple bot base for Discord.JS

* Adding commands  
  &nbsp;&nbsp;&nbsp;&nbsp;
  To add commands, simply create a file in `commands`.  
  &nbsp;&nbsp;&nbsp;&nbsp;
  Example:  

  `ping.js:`
  ```js
  module.exports = {
    name: 'ping',
    description: 'Pong!',

    execute(message, args, client) {
      message.channel.send(':ping_pong: Pong!');
    }
  };
  ```