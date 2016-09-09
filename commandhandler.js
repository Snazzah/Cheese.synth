var path = require("path").join(__dirname, "commands");
var loadedCommands = {}

require("fs").readdirSync(path).forEach(function(file) {
  try{
    cfile = require("./commands/" + file);
    loadedCommands[cfile.name] = cfile;
  }catch(e){
    console.log(`Command File ${file} failed to load: ${e}`)
  }
});

handlerFunction = function(msg, bot, options){
  var label = msg.content.slice(options.prefix.length).split(" ")[0];
  if (msg.content.startsWith(options.prefix) && loadedCommands[label]) {
    var command = loadedCommands[label];
    var args = msg.content.slice(options.prefix.length + label.length).slice(1).split(" ");
    try {
      var res = loadedCommands.protocol(bot, msg, args, options);
      if (res) bot.createMessage(msg.channel.id, res);
    } catch (e) {
      bot.createMessage(msg.channel.id, "<:CheeseRIP:210176666620657664> `Command failed to execute. Notify Cheese for errorlog.`").catch(console.log);
      console.log(e);
    }
  }else if(msg.content.startsWith(options.prefix) && label == 'help'){
    var args = msg.content.slice(options.prefix.length + label.length).slice(1).split(" ");
    if(args[0]==undefined){
      cmds = Object.keys(loadedCommands).map(c=>" `"+c+"`")
      bot.createMessage(msg.channel.id, "__**Available Commands**__\n"+cmds+"\n\nType "+options.prefix+"help <commandName> for more info on that command.").catch(console.log);
    }else{
      if(loadedCommands[label]){
        command = loadedCommands[label];
        usa = options.prefix+command.name
        if (command.usage) {usa = options.prefix+command.name+" "+command.usage}
        msg = "__**"+command.name+"**__"
        +"\n"+command.description
        +"\n**Usage**: "+usa
        bot.createMessage(msg.channel.id, msg);
      }else{
        bot.createMessage(msg.channel.id, "That command couldn't be found!");
      }
    }
  }else if(msg.content.startsWith(options.prefix) && label == 'eval'){
    if (msg.author.id === '71323348545576960'){  // Replace with your User ID
      try{
        var code = msg.content.slice(1 + "eval".length);
        var result = eval(code);
        bot.createMessage(msg.channel.id, "**Input:**\n" + "```js\n" + code + "```\n" + "**Result:**\n```js\n" + result + "```");
      }catch(e){
        bot.createMessage(msg.channel.id, "```fix\n"+e+"```");
      }
    }
  }
}

module.exports = { exec: handlerFunction, commands: loadedCommands }
