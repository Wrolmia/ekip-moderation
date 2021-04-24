const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
exports.run = async (client, message, args) => {   

let Tag = "Ruby" //Tagınız
let Etiket = "1784" //etiket tagı 0001 gibi

   let TotalMember = message.guild.memberCount
          let Online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
          let Taglı = message.guild.members.cache.filter(u => u.user.username.includes(Tag)).size;
          let Etiketiniz = message.guild.members.cache.filter(u => u.user.discriminator.includes(Etiket)).size;
          let toplamTag = Etiketiniz + Taglı
          let Voice = message.guild.members.cache.filter(s => s.voice.channel).size;
          let Boost = message.guild.premiumSubscriptionCount;
          message.react(ayarlar.onayemoji)

message.channel.send(new Discord.MessageEmbed().setDescription(`
\`•\` Sunucumuzda toplam **${TotalMember}** kullanıcı bulunmaktadır.
\`•\` Sunucumuzda toplam **${Online}** aktif kullanıcı bulunmaktadır.
\`•\` Normal Taglı **${Taglı}** kişi tagımızda bulunuyor.
\`•\` Etiket Taglı **${Etiketiniz}** kişi tagımızda bulunuyor.
\`•\` Toplam **${toplamTag}** kişi tagımızda bulunuyor.
\`•\` Seste **${Voice}** kullanıcı bulunmaktadır.
\`•\` Sunucuya toplam **${Boost}** takviye yapılmıştır.
`))
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["say","info","bilgi"],
  permLevel: 0
};
exports.help = {
  name: 'say',
  description: '',
  usage: 'say'
};