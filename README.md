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


* Tokens  
  &nbsp;&nbsp;&nbsp;&nbsp;
  Set your token at `.env`.

* Running  
  &nbsp;&nbsp;&nbsp;&nbsp;
  To run the bot, spin up a command line and enter `node .`  
  &nbsp;&nbsp;&nbsp;&nbsp;
  This will throw an error if the token is invalid.

* Prefix  
  &nbsp;&nbsp;&nbsp;&nbsp;
  The default prefix is `!`