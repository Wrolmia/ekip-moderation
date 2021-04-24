const Discord = require('discord.js')
const db = require('quick.db')
exports.run = async(client, message, args ) => {
  
let bannedmember = message.mentions.users.first()

let guild = message.guild
if (!bannedmember) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setAuthor(`RKW Was Here`, message.author.avatarURL()).setDescription(`** • Bir Kişi Etiketlemelisin**`))
 
  
  let sebep = args.slice(1).join(' ')
  if (!sebep) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setAuthor(`RKW Was Here`, message.author.avatarURL()).setDescription(`**⚠ • Sebep Belirtmelisin**`))
     message.channel.send(new Discord.MessageEmbed().setColor("RED").setAuthor(`RKW Was Here`, message.author.avatarURL()).setDescription(`**• Kullanıcıyı Banlamak İstediğinizden Emin Misiniz ? Lütfen __evet (e)__ veya __hayır (h)__ İle Cevap Verin.\n\n\`30\` Saniye İçerisinde İptal Edilcektir**`))
  let uwu = false; 
  while (!uwu) {
    const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 }); 
    const Hyper = response.first().content
    if (Hyper == 'hayır' || Hyper == 'h') return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription("**İşlem İptal Edildi**"))
    if (Hyper !== 'evet' && Hyper !== 'e') { 
      message.channel.send(new Discord.MessageEmbed().setAuthor(`RKW Was Here`, message.author.avatarURL()).setColor("RED").setDescription("**Lütfen Sadece (e) evet Veya (h) hayır İle Cevap Verin**"))
    } 
    if (Hyper == 'evet' || Hyper == 'e') uwu = true 
  } 
    


  guild.members.ban(bannedmember)
    const embed = new Discord.MessageEmbed()
    .setColor("BLACK")
    .setThumbnail(message.author.avatarURL())
    .setTitle('Bir Kullanıcı Kullanıcı Banlandı!')
    .setDescription(`**Banlanan Kullanıcı : ${bannedmember} \nSebep : ${sebep} \nBanlayan : <@${message.author.id}>**`)
    .setTimestamp()
    message.channel.send(embed)
  }
  


exports.conf = {
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'ban'
}; 
