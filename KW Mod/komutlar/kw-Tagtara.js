const { MessageEmbed } = require("discord.js");
const db = require("quick.db");
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
    if(db.fetch(`bakim`)) {
        if(message.author.id !== ayarlar.sahip) {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
      }

if(!message.member.hasPermission("ADMINISTRATOR")) return;

let tag = args[0];
if (!tag) return message.channel.send(new MessageEmbed().setColor("RED").setDescription(`Tarıycağım tagı belirlemelisin !`));
let tag1 = message.guild.members.cache.filter(tagdakiler => { return tagdakiler.user.username.includes(tag);});
message.react(ayarlar.onayemoji)


tag1.forEach(async member => {
await member.roles.add(ayarlar.family);
})

message.channel.send(new MessageEmbed().setAuthor(message.author.tag, message.author.avatarURL({ dynamic: true })).setColor("RED").setDescription(`❯ **${tag}** Tag'ına sahip herkese [<@&`+ ayarlar.family +`>] rolü dağtılımaya başlandı.`).setColor("RED"))

}
exports.conf = { enabled: true, guildOnly: false, aliases: ["tagtara", "tagrolver"], permLevel: 0 };

exports.help = { name: "tagtara" };