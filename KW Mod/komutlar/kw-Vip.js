const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args, member, client, level) => {
          if (!message.member.roles.cache.has("ADMINISTRATOR"))
            return message.channel.send(
              "Bu Komudu Kullanmaya İznin Yok"
            );
  let user =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.cache.get(args[0]);
    if (!user)
    return message.reply("Vip olarak kayıt etmem gereken kisiyi etiketlemen lazım.");
  user.roles.add("835519951129411584");
  const ky = new Discord.MessageEmbed().setDescription(
    `${user} Kullanıcı vip olarak kayıt edildi.`
  );
  message.react(ayarlar.onayemoji)

//RKW Tarafından Kodlandırılmıştır.

  message.channel.send(ky);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["vip"],
  permLevel: 0
};
exports.help = {
  name: "vip",
  description: "vip ver",
  usage: "vip ver"
};