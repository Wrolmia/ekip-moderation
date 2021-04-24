const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
  const Embed = new Discord.MessageEmbed()
  .setColor("BLACK")
  .setTimestamp()
  .setDescription(`**
  Komutlarım
  ${prefix}yardım @KW/ID
  ${prefix}ban @KW/ID Sebep
  ${prefix}unban @KW/ID Sebep
  ${prefix}mute @KW/ID 1s/1m/1h/1d sebep
  ${prefix}unmute @KW/ID Sebep
  ${prefix}vip @KW/ID
  ${prefix}isim @KW/ID İsim Yaş
  ${prefix}jail @KW/ID Sebep
  ${prefix}unjail @KW/ID Sebep
  ${prefix}zengin 
  ${prefix}yetkiler
  ${prefix}rolbilgi @KW/ID
  ${prefix}tagtara Tag 
  ${prefix}yetkilises
  ${prefix}snipe
  ${prefix}sil 1-100
  ${prefix}seskontrol
  ${prefix}say
  ${prefix}kullanıcı-bilgi 
  ${prefix}afk Sebep
  ${prefix}kayıtsız @KW/ID
  ${prefix}katıldı
  ${prefix}avatar 
  ${prefix}fçek
  ${prefix}fgit
  ${prefix}kes
  ${prefix}uyar @KW/ID Sebep

  `)
  message.channel.send(Embed)
  
  }
  
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'KW Was Here',
  usage: 'prefix + yardım'
} 