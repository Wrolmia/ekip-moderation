const Discord = require("discord.js")
exports.run= async (client,message,args)=>{
    let NoVoice = message.guild.members.cache.filter(Tau => Tau.roles.cache.has('832978199478009948')).filter(filterTau => !filterTau.voice.channel&&filterTau.presence.status!="offline")
    let Embed = new Discord.MessageEmbed()
    .setAuthor("Seste olmayan yetkililerin listesi")
    .setDescription(`${NoVoice.map(noVoiceMember => `${noVoiceMember}  \`${noVoiceMember.user.tag}\``).join('\n')}`)
    .setFooter("KW 🧡",message.author.displayAvatarURL())
    .setColor("F77F77")
    .setThumbnail(client.user.displayAvatarURL())
    .setTimestamp()
    message.channel.send(Embed)
    message.react(ayarlar.onayemoji)
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["yetkilises"],
    permLevel: 0
  };
  exports.help = {
    name: "yetkilises",
    description: "yetkilises",
    usage: "yetkilises"
  };
