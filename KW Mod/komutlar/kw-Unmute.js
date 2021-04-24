const { MessageEmbed } = require('discord.js');
const data = require('quick.db');
const ms = require('ms');
const moment = require('moment')
const ayarlar = require("../ayarlar.json");


module.exports.run = async (client, message, args) => {
  

  
if(![(ayarlar.mutehammer)].some(role => message.member.roles.cache.get(role)) && (!message.member.hasPermission("ADMINISTRATOR"))) 
return message.channel.send(new MessageEmbed().setDescription(`${message.author} Komutu kullanmak için yetkin bulunmamakta.`).setColor('RANDOM').setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true })).setTimestamp()).then(x => x.delete({timeout: 5000}));
 
const muterol = message.guild.roles.cache.find(r => r.id === (ayarlar.muterol))
message.react(ayarlar.onayemoji)



let member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
if (!member) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription(`${message.author},lütfen bir kullanıcı belirt @RK/İD`)).then(x => x.delete({timeout: 5000}));
  
let mute = message.mentions.members.first() || message.guild.members.cache.find(r => r.id === args[0]);
if (!mute) { new MessageEmbed().setColor('RANDOM').setDescription(`${message.author}, lütfen bir kullanıcı belirt @RK/İD`).then(x => x.delete({timeout: 5000}));
} else {
if (mute.roles.highest.position >= message.member.roles.highest.position) 
{
        return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription(`Bu Kullanıcı Senden Üst/Aynı Pozisyonda Olabilir.`)).then(x => x.delete({timeout: 5000}));
} else {
let sebep = args[1]
if(!sebep) return message.channel.send(new MessageEmbed().setColor('RANDOM').setDescription(`Lütfen Bir sebep belirtiniz.`))  .then(x => x.delete({timeout: 5000}));
  

message.channel.send(new MessageEmbed().setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true})).setColor('RANDOM').setTimestamp().setDescription(`${member} Kişisinin Mutesi ${message.author} Tarafından __${sebep}__ sebebiyle kaldırıldı.`)).then(x => x.delete({timeout: 5000}));
mute.roles.remove(muterol)
message.react('✅')
} 


      }}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["unmute"],
  permLevel: 0,
  name: "unmute"
}

exports.help = {
  name: "unmute"
};

