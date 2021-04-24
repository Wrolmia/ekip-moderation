const Discord = require("discord.js"),
client = new Discord.Client();

module.exports.run = async (client, message, args) => {

let reawEmbed = new Discord.MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setFooter("KW Was Here", message.guild.iconURL({dynamic: true})).setColor("010000")


let reawRole = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]); 
if (!reawRole) return message.channel.send(reawEmbed.setDescription(`:no_entry_sign: Geçerli bir rol belirtmeli/Rol ID'si girmelisin.`))

  
let reawArray = new Array();
let reawÜyeler = reawRole.members.forEach(reaw => {reawArray.push(`<@!${reaw.id}> ( \`${reaw.id}\` )`);})


message.channel.send(reawEmbed.setDescription(`
${reawRole} ( \`${reawRole.id}\` ) adlı role ait bilgiler aşağıda verilmiştir.

> **Rol Rengi:** \`${reawRole.hexColor}\`
> **Rol ID'si:** \`${reawRole.id}\` 
> **Roldeki Kişi Sayısı**: \`${reawRole.members.size}\`


**Roldeki kişiler:**

${reawRole.members.size <= 15 ? reawArray.join("\n") : `Listelenemedi! ( **${reawRole.members.size}** kişi var! )`}
`))
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["rolbilgi"],
    permLevel: 0
  };
  exports.help = {
    name: "rolbilgi",
    description: "rolbilgi",
    usage: "rolbilgi"
  };

