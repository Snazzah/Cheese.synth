command = {
  name: "ping",
  description: "ping",
  protocol: function(bot, msg, args, options){
    return "Pong!";
  }
}

module.exports = command;
