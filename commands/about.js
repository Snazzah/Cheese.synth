command = {
  name: "about",
  description: "about",
  protocol: function(bot, msg, args, options){
    return "**Bot Version: **" + options.botVersion
    + "\n I'm currently on the server: **"+msg.channel.guild.name+"** and my prefix is `"+options.prefix+"`."
    + "\n Cheese.synth is created by @Cheese - You can find the source here: <https://github.com/Cheeselab/Cheese.synth>"
    + "\n My current game is set to **" + options.gameName + "** by the owner! Only the owner can set this."
    + "\n You can get help on the server by typing `"+options.prefix+"help`";
  }
}

module.exports = command;
