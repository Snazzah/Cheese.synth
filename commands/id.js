command = {
  name: "id",
  description: "id",
  usage: "`id [me/username]`",
  protocol: function(bot, msg, args, options){
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
  }
}

module.exports = command;
