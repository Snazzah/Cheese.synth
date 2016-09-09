command = {
  name: "game",
  description: "game",
  protocol: function(bot, msg, args, options){
    return "My current game is set to **" + options.gameName + "** by the owner! Only the owner can set this.";
  }
}

module.exports = command;
