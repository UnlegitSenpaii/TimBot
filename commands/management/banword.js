const cmd = require("discord.js-commando");

class importCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "banword",
          group: "management",
          memberName: "banword",
          description: "Verbietet ein Wort!"
       });
    }
    async run(message, args)
    {
        if(message.member.hasPermission("ADMINISTRATOR"))
        {
            bannedwords.push(args)
            message.channel.send("`Erfolgreich " + args + " hinzugefügt!`")
        }
        else{
            message.channel.send("`Du hast nicht genug Rechte, um diesen Command auszuführen!`")
        }
    }

}

module.exports = importCommand;