const discord = require("discord.js");
const cmd = require("discord.js-commando")
const bot = new cmd.Client();

    //registering the commands
bot.registry.registerGroup("simple", "Simple");
bot.registry.registerGroup("management", "Management");
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname+ "/commands");
    //globals
global.disablechat = false;
global.links = true;
global.bannedwords = [
    "nigger",
    "arschloch",
    "wichser",
    "fuck"
];

    //events
bot.on("message", function(message){
        if(message.author == bot.user)
            return;
        if(message.content.length < 2)
        {
            message.delete();
            message.author.send("`Die Nachtricht die du geschickt hast ist zu klein!`")
            console.log("Deleted message from: " + message.author.username + message.author + " reason: Message to short!");
        }
    var found = false;

        for(var i in bannedwords){
            if (message.content.toLowerCase().includes(bannedwords[i].toLowerCase()))
                found = true;
        }

        if(found)
        {
            message.delete();
            message.author.send("`Die Nachricht die du geschickt hast(" + message.content + ") ist auf dem Server in der Blacklist!`")
            console.log("Deleted message from: " + message.author.username + message.author + "reason: Forbidden word: " + message.content);
        }
        if(!links){
            if(message.content.toLowerCase().includes("https://"))
            {
                message.delete();
                message.author.send("`Links sind auf diesem Server deaktiviert!`");
                console.log("Deleted message from: " + message.author.username + message.author + " reason: Link!");
            }
            if(message.content.toLowerCase().includes("http://"))
            {
                message.delete();
                message.author.send("`Links sind auf diesem Server deaktiviert!`");
                console.log("Deleted message from: " + message.author.username + message.author + " reason: Link!");
            }
        }
});

bot.on("ready", function(){
    console.log("######################################################################");
    console.log("################## Successfully started the bot ######################");
    console.log("######################################################################");
    let statuses = [
        "Developer",
        "Developer",
        "Creator:⎛⎝Senpaii Satanist⎠⎞#1633"
    ]
    setInterval(function() {
        let status = statuses[Math.floor(Math.random() * statuses.length)]
        bot.user.setActivity(status);

    }, 10000)
    bot.user.setStatus("Online")
});

bot.on("guildMemberAdd", function(member){
        console.log(member.user  + " ist dem Server beigetreten! ID: " + member);
});







    	//change -> token of testbot
bot.login("NDc0OTk0ODI2NzQ4NzU1OTY4.DkYqBQ.-4v5UbQEHrrttKdvsrVJ20br_20");
