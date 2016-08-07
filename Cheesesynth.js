const Eris = require("eris");

var botVersion = "v0.0.1.1 alpha";
var gameName = "Cheese.lab Industries Inc.";
var prefix = ".";

var bot = new Eris("  "); //REMOVED TOKEN
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
    var msgDate = new Date(msg.member.joinedAt);
    var msgGame;
    try {
        msgGame = "Playing "+msg.member.game.name;
    }
    catch(err) {
        msgGame = "N/A";
    }
    if(msg.content.startsWith(prefix))
    {
        var cmd = msg.content.substring( prefix.length ).toLowerCase();
        if(cmd  === "ping")
        {
            try { //Try to send the message as any exceptions can happen if the message content is over 2000 characters.
                bot.createMessage(msg.channel.id, "Pong!");
                //Do not have mentions in console logs, the user's id and their name is good enough.
                console.log(msg.author.id+" with the name of "+msg.author.username+" pinged the server!");
            } catch (err) { //this means sendign the message failed for some reason.
                console.log('Failed too send the reply for the ping command. See line 38 for more info')
            }
        }
        else if (cmd === "commands")
        {
            try {
                bot.createMessage(msg.channel.id, msg.author.mention+" "+"Coming SOON:tm:");
            } catch (err) {
                console.log("Failed to send message from the commands command. please see line 46 in this bot's code.")
            }
        }
        else if (cmd === "eval" && message.author.id === '71323348545576960') { // Replace with your User ID
			try{
				mybot.reply(message, "```js\n" + eval(message.content.replace(prefix+"eval ", "")) + "```");
			}catch(e){
				mybot.reply(message, "```js\n"+e+"```");
			}
        {
            try {
                bot.createMessage(msg.channel.id, msg.author.mention+" "+"Coming SOON:tm:");
            } catch (err) {
                console.log("Failed to send message from the commands command. please see line 46 in this bot's code.")
            }
        }
        else if(cmd === "pong")
        {
            try {
                //I know I like to Try and catch everything because if you learn from python anything can Error at any time. in JS it crashes bots so expect the unexpected.
                bot.createMessage(msg.channel.id, "Ping!");
            } catch (err) {
                console.log('Failed too send the reply for the pong command. See line 55 for more info.');
            }
        }
        else if(cmd === "cheese")
        {
            try {
                bot.createMessage(msg.channel.id, ":cheese:");
            } catch (err) {
                console.log('Failed too send the reply for the cheese command. See line 63 for more info');
            }
        }
        else if (cmd === "lenny")
        {
            bot.createMessage(msg.channel.id, "( ͡° ͜ʖ ͡°)");}
        else if (cmd === "info")
           {
               if(cmd.startsWith("info"))
               {
                   if(msg.mentions.length > 1)
                   {
                       // make the bot say there were too many mentions
                       bot.createMessage(msg.channel.id, "Gah! Too many mentions. Try again!");
                   }
                   else
                   {
                       // set the member to the person calling the command...
                       var member = msg.member
                       if(msg.mentions.length == 1) // ...unless they mention a user
                       {
                           member = msg.channel.guild.members.get(msg.mentions[0]);
                       }
                       var n = ''
                       if(member.nick!=null){ n = "\n"+"     Nickname: "+member.nick } // Cool look
                       var ro = []
                       ro = member.roles.map(r => msg.channel.guild.roles.find(m => m.id == r).name)
                       bot.createMessage(msg.channel.id,
                           "__**"+member.user.username.toUpperCase() + "'S OFFICIAL ID CARD - ACCESS CODE: #"+member.user.discriminator+"**__" + "\n"
                           + "```ruby\n"
                           +"\n"+"           ID: "+member.user.id
                           +"\n"+"         Name: "+member.user.username
                           +n
                           +"\n"+"Discriminator: "+member.user.discriminator
                           +"\n"+"       Status: "+member.status
                           +"\n"+" Current Game: "+msgGame
                           +"\n"+"        Roles: "+ro
                           +"\n"+"       Joined: "+msg.channel.guild.name+" on "+msgDate
                           +"\n"+"       Avatar: "+"\n"+"https://cdn.discordapp.com/avatars/"+member.user.id+"/"+member.user.avatar+".jpg "
                           + "```"
                       );
                   }
               }
           }
        else if (cmd === "test")
        {
            try {
                bot.createMessage(msg.channel.id, "I hear you <@"+msg.author.id+"> :ok_hand:");
            } catch (err) {
                console.log('Failed too send the reply for the cheese command. See line 107 for more info');
            }
        }
        else if (cmd === "hi!" || cmd === "hello!")
        {
            bot.createMessage(msg.channel.id, "<@"+msg.author.id+"> Welcome to the **"+msg.channel.guild.name+"** Server!");
            bot.createMessage(msg.channel.id, "*flips table*");
            bot.createMessage(msg.channel.id, "(╯°□°）╯︵ ┻━┻");
        }
        else if (cmd === "setgame")
        {null;}
        else if (cmd === "version")
        {bot.createMessage(msg.channel.id, "**Bot Version: **" + botVersion);}
        else if (cmd === "game")
        {bot.createMessage(msg.channel.id, "My current game is set to **" + gameName + "** by the owner! Only the owner can set this.");}
        else if (cmd === "fight")
        {bot.createMessage(msg.channel.id, "You're such a slut <@194103257637978114> ");}
        else if (cmd === "debug")
        {bot.createMessage(msg.channel.id, null);}
  }
});

bot.connect();
