const {MessageEmbed} = require('discord.js');
const db = require('quick.db');
const moment = require('moment');
const ayarlar = require('../ayarlar.json');
require('moment-duration-format');

exports.run = async(client, message, args) => {

    let hembed = new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RED')
    let embed = new MessageEmbed().setColor('#2F3136')
    message.react(ayarlar.onayemoji)

  if (message.member.roles.cache.has('835523259029651556') || message.member.roles.highest.position >= message.guild.roles.cache.get('835503941046632520').position) {
  let mesaj = db.get(`snipe.${message.guild.id}.${message.channel.id}`);
  if (!mesaj) {
    message.delete({timeout: 5000})
    return message.channel.send(hembed.setDescription(`Bu kanalda silinmiş bir mesaj bulunmamakta.`)).then(msg => msg.delete({timeout: 5000}))}
    
  let mesajYazari = await message.guild.members.cache.get(mesaj.yazar);
  if (mesaj.icerik) {
return message.channel.send(embed.setDescription(`

Mesaj İçeriği: \`${mesaj.icerik}\`

${ayarlar.onayemoji} Mesaj Sahibi: ${mesajYazari ? mesajYazari : mesajYazari.tag} ( \`${mesajYazari.id}\` )
${ayarlar.onaymoji} Mesajın Yazılma Tarihi: \`${moment.duration(Date.now() - mesaj.yazilmaTarihi).format("D [gün], H [saat], m [dakika], s [saniye]")}\` önce
${ayarlar.onaymoji} Mesajın Silinme Tarihi: \`${moment.duration(Date.now() - mesaj.silinmeTarihi).format("D [gün], H [saat], m [dakika], s [saniye]")}\` önce 


`))
  }
  } else {
    message.delete({timeout: 5000})
    return message.channel.send(hembed.setDescription(`Bu komutu kullanmak için yetkin yetersiz.`)).then(msg => msg.delete({timeout: 5000}))
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["snipe"],
  permLevel: 0
};
exports.help = {
  name: "snipe",
  description: "snipe",
  usage: "snipe"
};
