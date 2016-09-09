const Eris = require("eris");

var botVersion = "v0.0.3 alpha";
var gameName = "Type .about for info";
var prefix = ".";
var commands = {};

commands._register = function (label, generator, options) {
    commands[label] = {label: label, exec: generator, options: options};
};

var bot = new Eris("Bot "); //REMOVED TOKEN
bot.on("ready", () => {
    console.log("Cheese.synth is unloading Cheese.puns! Please wait...");
    console.log("Finished loading Cheese.puns. Unpacking Cheese.food...");
    console.log("Done!");
    console.log("Running Bot Version: " + botVersion);
    bot.editStatus(true,{
        name: gameName
    });
    console.log("Game set to " + gameName);
});

commands._register("ping", (msg) => {
    return "Pong!";
});
commands._register("cheese", () => {
    return ":cheese:";
});
commands._register("lenny", () => {
    return "( ͡° ͜ʖ ͡°)";
});
commands._register("fight", (msg, args) => {
    return "You're such a slut " +args[0];
});
commands._register("game", () => {
    return "My current game is set to **" + gameName + "** by the owner! Only the owner can set this.";
});
commands._register("version", () => {
    return "**Bot Version: **" + botVersion;
});
commands._register("eval", (msg) => {
        if (msg.author.id === '71323348545576960')  // Replace with your User ID
     			try{
                                var code = msg.content.slice(1 + "eval".length);
                                var result = eval(code);
   				bot.createMessage(msg.channel.id, "**Input:**\n" + "```js\n" + code + "```\n" + "**Result:**\n```js\n" + result + "```");
   			}catch(e){
   				bot.createMessage(msg.channel.id, "```fix\n"+e+"```");
   			}
});
commands._register("say", (msg) => {
          var say = msg.content.slice(1 + "say".length);
   				bot.createMessage(msg.channel.id, say);
});

commands._register("slap", (msg, args) => {
          return "*slaps "+args[0]+" around a bit with a large trout*";
});
commands._register("github", (msg, args) => {
          return "Their GitHub link is <https://github.com/" + args[0] + "/>";
});
commands._register("emotes", (msg) => {
          return "**Current Custom Emotes:** <:CheeseRIP:210176666620657664> & <:Cheeselab:209900006436634624>";
});
commands._register("tableflip", (msg) => {
          return "*flips table*";
          return "<@"+msg.author.id+"> "+"(╯°□°）╯︵ ┻━┻";
});
commands._register("about", (msg) => {
          return "**Bot Version: **" + botVersion
          + "\n I'm currently on the server: **"+msg.channel.guild.name+"** and my prefix is `"+prefix+"`."
          + "\n Cheese.synth is created by @Cheese - You can find the source here: <https://github.com/Cheeselab/Cheese.synth>"
          + "\n My current game is set to **" + gameName + "** by the owner! Only the owner can set this."
          + "\n You can get help on the server by typing `"+prefix+"help`";
});
commands._register("id", (msg, args) => {
          var member = msg.channel.guild.members.find((o) => {
          if (o.user.username === args.join(" ")) return true
          });
          if (args[0] === "me") {
          member = msg.member;
          }
          if (args < 1) {
          bot.createMessage(msg.channel.id, "Usage: `id [me/username]`")
          return
          };
          var msgDate = new Date(member.joinedAt);
          var msgGame;
          try {msgGame = "Playing "+member.game.name;}
          catch(err) {msgGame = "N/A";}
          var id = msg.content.slice(1 + "id".length);
          var n = ''
          if(member.nick!=null){ n = "\n"+"     Nickname: "+msg.member.nick } // Cool look
          var ro = []
          ro = member.roles.map(r => msg.channel.guild.roles.find(m => m.id == r).name)
          return "__**"+member.user.username.toUpperCase() + "'S OFFICIAL ID CARD - ACCESS CODE: #"+member.user.discriminator+"**__" + "\n"
          + "```ruby\n"
          +"\n"+"           ID: "+member.user.id
          +"\n"+"         Name: "+member.user.username
          +n
          +"\n"+"Discriminator: "+member.user.discriminator
          +"\n"+"       Status: "+member.status
          +"\n"+" Current Game: "+msgGame
          +"\n"+"        Roles: "+ro
          +"\n"+"       Joined: "+msg.channel.guild.name+" on "+msgDate
          +"\n"+"       Avatar: https://cdn.discordapp.com/avatars/"+member.user.id+"/"+member.user.avatar+".jpg "
          + "```";
});
commands._register("server", (msg) => {
          var msgDate = new Date(msg.channel.guild.createdAt);
          return "__**"+msg.channel.guild.name.toUpperCase() + "'S SERVER INFO:**__" + "\n"
          + "```ruby\n"
          +"\n"+"           ID: "+msg.channel.guild.id
          +"\n"+"         Name: "+msg.channel.guild.name
          +"\n"+"       Region: "+msg.channel.guild.region.toUpperCase()
          +"\n"+"      Members: "+msg.channel.guild.memberCount
          +"\n"+"      Created: "+msgDate
          +"\n"+"       Avatar: https://discordapp.com/api/guilds/"+msg.channel.guild.id+"/icons/"+msg.channel.guild.icon+".jpg "
          + "```";
});
commands._register("help", (msg) => {
  bot.getDMChannel(msg.author.id).then(chan => {
  bot.createMessage(chan.id, "**__CURRENT COMMANDS:__**"+
                "```ruby\n"
                +"\n"+" EXPERIMENTAL: "+prefix+"id, "+prefix+"server, "+prefix+"github"
                +"\n"+"          FUN: "+prefix+"cheese, "+prefix+"lenny, "+prefix+"tableflip, "+prefix+"fight, "+prefix+"emotes, "+prefix+"slap, "+prefix+"say"
                +"\n"+"         MISC: "+prefix+"ping, "+prefix+"pong"
                +"\n"+"     BOT INFO: "+prefix+"about, "+prefix+"help (this command), "+prefix+"game, "+prefix+"version"
                + "```" +
    "\n Cheese is currently in the process of implementing better help command.");
  })
  return ":ok: `Check your messages!` :ok_hand:";
});

bot.on("messageCreate", (msg) => {
    var label = msg.content.slice(prefix.length).split(" ")[0];
    if (msg.content.startsWith(prefix) && commands[label]) {
        var command = commands[label];
        var args = msg.content.slice(prefix.length + label.length).slice(1).split(" ");
        try {
            var res = command.exec(msg, args);
            if (res) bot.createMessage(msg.channel.id, res);
        } catch (e) {
            bot.createMessage(msg.channel.id, "<:CheeseRIP:210176666620657664> `Command failed to execute. Notify Cheese for errorlog.`").catch(console.log);
            console.log(e);
        }
    };
});

bot.connect();
