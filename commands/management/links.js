const cmd = require("discord.js-commando");

class linksCommand extends cmd.Command
{
    constructor(client)
    {
        super(client,{

          name: "links",
          group: "management",
          memberName: "links",
          description: "Verbietet/Erlaubt links mit links on oder off!"
       });
    }
    async run(message, args)
    {
        if(message.member.hasPermission("ADMINISTRATOR"))
        {
            if(args == "on" || args == "off")
            {
                if(args == "on")
                {
                    if(links == false)
                    {
                        links = true;
                        message.channel.send("`Links sind nun aktiviert!`")
                    }
                    else{
                        message.channel.send("`Links sind schon deaktiviert!`")
                    }
                }
                if(args == "off"){
                    if(links == true){
                        links = false;
                        message.channel.send("`Links sind nun deaktiviert!`");
                    }
                    else{
                        message.channel.send("`Links sind schon deaktiviert!`")
                    }
                }
            }else{
                message.channel.send("`Du musst entweder on oder off als Argument schreiben!`")
            }
        }
        else{
            message.channel.send("`Du hast nicht genug Rechte, um diesen Command auszuführen!`")
        }
    }

}

module.exports = linksCommand;