const Eris = require("eris");

var options = {
  botVersion: "v0.0.3 alpha";
  gameName: "Type .about for info";
  prefix: ".";
}
var chandle = require("./commandhandler.js");

var bot = new Eris("Bot "); //REMOVED TOKEN
bot.on("ready", () => {
    console.log("Cheese.synth is unloading Cheese.puns! Please wait...");
    console.log("Finished loading Cheese.puns. Unpacking Cheese.food...");
    console.log("Done!");
    console.log("Running Bot Version: " + options.botVersion);
    bot.editStatus(true,{
        name: options.gameName
    });
    console.log("Game set to " + options.gameName);
});

bot.on("messageCreate", (msg) => {
    chandle.exec(msg, bot, options)
});

bot.connect();
