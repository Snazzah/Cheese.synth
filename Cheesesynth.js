const Eris = require("eris");

var botVersion = "v0.0.1.1 alpha";
var gameName = "Cheese.lab Industries Inc.";
var prefix = "."

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
        var msgGame;
        try {msgGame = "Playing "+msg.member.game.name;}
        catch(err) { msgGame = "Playing "+"None";}

    if(msg.content.startsWith(prefix))
    {
    var cmd = msg.content.substring( prefix.length ).toLowerCase();
    if(cmd  === "ping")
    { bot.createMessage(msg.channel.id, "Pong!");
    console.log("<"+"@"+msg.author.id+">" + " pinged the server!");}
    else if (cmd === "commands")
    { bot.createMessage(msg.channel.id, msg.author.mention+" "+"Coming SOON:tm:");}
    else if(cmd === "pong")
    { bot.createMessage(msg.channel.id, "Ping!");}
    else if(cmd === "cheese")
    { bot.createMessage(msg.channel.id, ":cheese:");}
    else if (cmd === "lenny")
    { bot.createMessage(msg.channel.id, "( ͡° ͜ʖ ͡°)");}
    else if (cmd === "info")
    {
      var msgchan = msg.channel.id;
      var usrid = msg.author.id;
      bot.createMessage(msgchan,
        "__**"+msg.member.user.username.toUpperCase() + "'S OFFICIAL ID CARD - ACCESS CODE: #"+msg.member.user.discriminator+"**__" + "\n"
      + "```ruby\n"
      +"\n"+"           ID: "+usrid
      +"\n"+"         Name: "+msg.member.user.username
      +"\n"+"     Nickname: "+msg.member.nick
      +"\n"+"Discriminator: "+msg.member.user.discriminator
      +"\n"+"       Status: "+msg.member.status
      +"\n"+" Current Game: "+msgGame
      +"\n"+"       Joined: "+msg.channel.guild.name+" on "+msg.member.joinedAt
      +"\n"+"       Avatar: "
      + "```"
      +"\n"+ "https://cdn.discordapp.com/avatars/"+usrid+"/"+msg.author.avatar+".jpg"
    );
    }
    else if (cmd === "test")
    {bot.createMessage(msg.channel.id, msg1);}
    else if (cmd === "hi!" || cmd === "hello!")
    {bot.createMessage(msg.channel.id, "<@"+msg.author.id+"> Welcome to the **"+msg.channel.guild.name+"** Server!");
    bot.createMessage(msg.channel.id, "*flips table*");
    bot.createMessage(msg.channel.id, "(╯°□°）╯︵ ┻━┻");}
    else if (cmd === "setgame")
    {null;}
    else if (cmd === "version")
    {bot.createMessage(msg.channel.id, "**Bot Version: **" + botVersion);}
    else if (cmd === "game")
    {bot.createMessage(msg.channel.id, "My current game is set to **" + gameName + "** by the owner! Only the owner can set this.");}

  }
});

bot.connect();
