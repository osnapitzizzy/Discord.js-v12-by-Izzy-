module.exports = {
  name: 'ping', // the name of the command!
  aliases: ['p','onlinecheck','pong'], // aliases! (these are like alternative names!)
  usage: 'just run the command!', // shows how to use the command
  description: 'used to see if bot is online (and give stats)', //pretty self explanatory... a description of the command
  category: 'info', //its category (i just use the name of the folder its in!)
  run: async(client, message, args) => { 
    //wat happens when the command is ran! vv
  
    message.channel.send('I\'m Online!');
    
  }
}