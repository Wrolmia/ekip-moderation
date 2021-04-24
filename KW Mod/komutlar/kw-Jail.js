const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
   if(!message.member.roles.cache.has('835503946491363349')) return message.channel.send(new Discord.MessageEmbed().setColor("RED").setDescription(`**⚠️ • Bu Komutu Kullanabilmek İçin \`Jail Hammer\` Yetkisine Sahip Olman Lazım**`))
   let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) //let member = message.mentions.users.first() || client.users.cache.get(args.join(' '))
   if(!member) {
       return message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setAuthor(`KW ❤️ `, message.author.avatarURL()).setDescription("**:x: Bir Kişi Etiketlemelisin**"))
   }
   
   let jail = message.guild.roles.cache.find(r => r.id === '835509499678294036')//JAİL ROL GİR

   
   let tag = '[ Jail ] '
   let Jaillog = '835503989810397225'
   if(!Jaillog) {
     return message.channel.send(new Discord.MessageEmbed().setAuthor(`KW ❤️`, message.author.avatarURL()).setColor("BLACK").setDescription("**⚠️ • Jail Kanal Ayarlanmamış**"))
     
   }
   
   if(!jail) {
       return message.channel.send(new Discord.MessageEmbed().setAuthor(`KW ❤️ `, message.author.avatarURL()).setColor("BLACK").setDescription("**⚠️ • Jail Rolü Ayarlanmamış**"))
   }

   let jail2 = message.guild.member(member)

   let sebep = args.slice(1).join(' ')
  if (!sebep) return message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setAuthor(`KW ❤️`, message.author.avatarURL()).setDescription(`**⚠️ • Sebep Belirtmelisin**`))

    message.channel.send(new Discord.MessageEmbed().setColor("BLACK").setAuthor(`KW ❤️`, message.author.avatarURL()).setThumbnail("https://i.pinimg.com/originals/2a/7e/89/2a7e8922a4584feb5db1b20e0e67f990.gif").setDescription(`**⚠️ • ${message.author} Kullanıcıyı Jaile Atmak İstediğinize Emin Misiniz ? Lütfen __evet (e)__ veya __hayır (h)__ İle Cevap Verin.\n\n\`30\` Saniye İçerisinde İptal Edilcektir**`))
  let uwu = false; 
  while (!uwu) {
    const response = await message.channel.awaitMessages(neblm => neblm.author.id === message.author.id, { max: 1, time: 30000 }); 
    const Hyper = response.first().content
    if (Hyper == 'hayır' || Hyper == 'h') return message.channel.send(new Discord.MessageEmbed().setAuthor(`KW ❤️`, message.author.avatarURL()).setColor("BLACK").setThumbnail("https://i.pinimg.com/originals/2a/7e/89/2a7e8922a4584feb5db1b20e0e67f990.gif").setDescription("**İşlem İptal Edildi**"))
    if (Hyper !== 'evet' && Hyper !== 'e') { 
      message.channel.send(new Discord.MessageEmbed().setAuthor(`KW ❤️`, message.author.avatarURL()).setColor("BLACK").setThumbnail("https://i.pinimg.com/originals/2a/7e/89/2a7e8922a4584feb5db1b20e0e67f990.gif").setDescription("**Lütfen Sadece (e) evet Veya (h) hayır İle Cevap Verin**"))
    } 
    if (Hyper == 'evet' || Hyper == 'e') uwu = true 
  } 
  
      db.add(`jailhyper.${message.author.id}`, 1)
    let jailhyper = db.fetch(`jailhyper.${message.author.id}`);
  
  
   member.roles.set(["835509499678294036"])
  
   let embed = new Discord.MessageEmbed()
   .setAuthor(`KW ❤️`, message.author.avatarURL())
   .setColor('BLACK')
   .setThumbnail("https://i.pinimg.com/originals/2a/7e/89/2a7e8922a4584feb5db1b20e0e67f990.gif")
   .setDescription(`**Jail'e Atılan Kullanıcı : ${member} \nSebep : ${sebep} \nJail'e Atan Yetkili : ${message.author} \nYetkilinin Toplam Jaile Attığı Kişi : \`${jailhyper}\`**`)
   message.channel.send(embed);
  
    message.guild.channels.cache.get(Jaillog).send(new Discord.MessageEmbed().setAuthor(`KW ❤️`, message.author.avatarURL()).setColor("BLACK").setDescription(`${member} Adlı Üye Jaile Atıldı\nJaile Atan Yetkili ${message.author}\nSebep : ${sebep}\nYetkinin Toplam Jaile Attığı Üye Sayısı : \`${jailhyper}\``));
}


exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'jail',
    description: 'KW ',
    usage: 'prefix + jail'
};


