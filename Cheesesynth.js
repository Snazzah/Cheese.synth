const Eris = require("eris");

var botVersion = "v0.0.1 alpha";
var gameName = "Cheese.lab";
var prefix = "."

var bot = new Eris(" "); //REMOVED TOKEN//
bot.on("ready", () => {
    console.log("Cheese.synth is unloading Cheese.puns! Please wait...");
    console.log("Finished loading Cheese.puns. Unpacking Cheese.food...");
    console.log("Done!");
    console.log("Running Bot Version: " + botVersion);
    bot.editStatus(false,{
        name: gameName
    });
    console.log("Game set to " + gameName);
});

bot.on("messageCreate", (msg) => {
      var msgGame;
      try {
          msgGame = "Playing "+msg.member.game.name;
      } catch(err) {
          msgGame = "Playing "+"None";
      }
    if(msg.content.toLowerCase()  === prefix + "ping") {
        bot.createMessage(msg.channel.id, "Pong!");
        console.log("<"+"@"+msg.author.id+">" + " pinged the server!");
    } else if (msg.content.toLowerCase()  === prefix +"commands") {
      bot.createMessage(msg.channel.id, msg.author.mention+" "+"Coming SOON:tm:");
    }else if(msg.content.toLowerCase()  === prefix +"pong") {
        bot.createMessage(msg.channel.id, "Ping!");
    }else if(msg.content.toLowerCase()  === prefix +"cheese") {
      bot.createMessage(msg.channel.id, ":cheese:");
    }
    else if (msg.content.toLowerCase()  === prefix +"lenny") {
      bot.createMessage(msg.channel.id, "( ͡° ͜ʖ ͡°)");
    }
    else if (msg.content.toLowerCase()  === prefix +"info") {
      var codeBlock = "```";
      bot.createMessage(msg.channel.id,
        "__**"+msg.member.user.username.toUpperCase() + "'S OFFICIAL ID CARD - ACCESS CODE: #"+msg.member.user.discriminator+"**__" + "\n"
      + "```ruby\n"
      +"\n"+"           ID: "+msg.author.id
      +"\n"+"         Name: "+msg.member.user.username
      +"\n"+"     Nickname: "+msg.member.nick
      +"\n"+"Discriminator: "+msg.member.user.discriminator
      +"\n"+"       Status: "+msg.member.status
      +"\n"+" Current Game: "+msgGame
      +"\n"+"       Joined: "+msg.channel.guild.name+" on "+msg.member.joinedAt
      +"\n"+"       Avatar: "
      + "```"
      +"\n"+ "https://cdn.discordapp.com/avatars/"+msg.author.id+"/"+msg.author.avatar+".jpg"
    );
    }
    else if (msg.content.toLowerCase() === prefix + "test") {
    bot.createMessage(msg.channel.id, msg1);
    }
    else if (msg.content.toLowerCase() === "hi!" || msg.content.toLowerCase() === "hello!") {
      bot.createMessage(msg.channel.id, "<@"+msg.author.id+"> Welcome to the **"+msg.channel.guild.name+"** Server!");
      bot.createMessage(msg.channel.id, "*flips table*");
      bot.createMessage(msg.channel.id, "(╯°□°）╯︵ ┻━┻");
    }
    else if (msg.content.toLowerCase()  === prefix +"setgame") {
      null;
    }
    else if (msg.content.toLowerCase()  === prefix +"version") {
      bot.createMessage(msg.channel.id, "**Bot Version: **" + botVersion);
    }
    else if (msg.content.toLowerCase()  === prefix +"game") {
      bot.createMessage(msg.channel.id, "My current game is set to **" + gameName + "** by the owner! Only the owner can set this.");
    }
});

bot.connect();
