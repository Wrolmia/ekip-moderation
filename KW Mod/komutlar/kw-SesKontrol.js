const Discord = require("discord.js");
module.exports.run = async (client, message, args) => {
//Arox was here!
let embed = new Discord.MessageEmbed().setAuthor(message.author.username, message.author.avatarURL({dynamic: true}))
let member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
if(!member) return message.channel.send(embed.setDescription(`Bir kullanıcı belirtmelisin.`)).then(x => x.delete({ timeout: 5000 }));
    let kanal = member.voice.channel
    if(!kanal) return message.channel.send(embed.setDescription(`Belirttiğin kişi ses kanalında bulunmuyor.`)).then(x => x.delete({ timeout: 5000 }));
let microphone = member.voice.selfMute ? "kapalı" : "açık";
let headphones = member.voice.selfDeaf ? "kapalı" : "açık";
let sestekiler = message.guild.channels.cache.get(kanal.id).members.map(x => x.user).join(", ")
//KW Was Here!
kanal.createInvite().then(invite =>
message.channel.send(embed.setDescription(`${member} kullanıcısı \`${kanal.name}\` kanalında.
**Mikrofon durumu:** \`${microphone}\`. | **Kulaklık durumu:** \`${headphones}\`.

*Kanala gitmek için [tıklaman](https://discord.gg/${invite.code}) yeterli.*

\`•\` Odadaki kişiler; ${sestekiler}`)))
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["seskontrol"],
    permLevel: 0
  };
  exports.help = {
    name: "seskontrol",
    description: "seskontrol",
    usage: "seskontrol"
  };
 
