const Discord = require('discord.js');
const bot = new Discord.Client();

var prefix = ("MagicBot!")

bot.on('ready', function() {
    bot.user.setUsername("MagicBot")
    bot.user.setPresence({ game: { name: 'brûler des mages malpoli'}, status: 'online'}) //en ligne;
    console.log("Connected")
});

bot.login(process.env.TOKEN);


bot.on('message', message => {
    if(message.content === "magie!feu"){ 
        message.channel.send(`**${message.author.username}** lance la capacité de feu !\nDégâts : 25`,{
        file: "https://orangemushroom.files.wordpress.com/2014/04/ignition-effect.gif"
    })
}
if(message.content === "magie!tornade"){ 
    message.channel.send(`**${message.author.username}** lance la capacité tornade!\nDégâts : 25`,{
    file: "https://pa1.narvii.com/6394/6e5f4ce3b0f5ea1c28d9788aa2a6eb376a041314_hq.gif"
})
}
if(message.content === "magie!stick-magic"){ 
    message.channel.send(`**${message.author.username}** lance la capacité stick magic!\nDégâts : 15`,{
    file: "https://orangemushroom.files.wordpress.com/2012/06/magic-booster-effect.gif"
})
}
if(message.content === "magie!nature"){ 
    message.channel.send(`**${message.author.username}** lance la capacité orbe de la nature!\nDégâts : 25`,{
    file: "https://i.pinimg.com/originals/69/eb/43/69eb43047ff86ade658b2c677c0567ee.gif"
})
}
if(message.content === "magie!glace"){ 
    message.channel.send(`**${message.author.username}** lance la capacité glace!\nDégâts : 20`,{
    file: "https://blog-imgs-18-origin.fc2.com/e/t/e/eternalhydrogen/skill_21111005_effect.gif"
})
}
if(message.content === "magie!eclair"){ 
    message.channel.send(`**${message.author.username}** lance la capacité d'éléctricité!\nDégâts : 50`,{
    file: "https://i.pinimg.com/originals/d7/f1/0e/d7f10ed0e12dce0a783373c2ae8b2c61.gif"
})
}
if(message.content === "magie!vent"){ 
    message.channel.send(`**${message.author.username}** lance la capacité vent!\nDégâts : 5`,{
    file: "https://i.pinimg.com/originals/98/51/59/985159cc49c09556b29c2264208028ca.gif"
})
}
if(message.content === "magie!ice-axe"){ 
    message.channel.send(`**${message.author.username}** lance la capacité hache magique!\nDégâts : 50\nSec : 10`,{
    file: "https://2img.net/h/i1200.photobucket.com/albums/bb340/x3TheAran595/Chaos21110011effect.gif"
})
}
if(message.content === "magie!slach"){ 
    message.channel.send(`**${message.author.username}** a utilisé compétence slach!\nDégâts : 15`,{
    file: "https://i.pinimg.com/originals/9b/7f/62/9b7f623ff55be9b911b1f20c1f836250.gif"
})
}
if(message.content === "magie!slach"){ 
    message.channel.send(`**${message.author.username}** lance la capacité implosion!\nDégâts : 50`,{
    file: "https://conserver.files.wordpress.com/2010/03/09.gif"
})
}
if(message.content === "magie!protection"){ 
    message.channel.send(`**${message.author.username}** lance la capacité protection!\nMur défendant de : 25 dégâts`,{
    file: "https://orangemushroom.files.wordpress.com/2012/06/anti-magic-shell-effect.gif"
})
}
if (message.content === "magie!help 1" ){  

    const embed = new Discord.RichEmbed()
    .setTitle("Magie niveau 1")
    .setColor(0x0086AE)
    .setDescription("Voici toute les attaque qu'un mage niveau 1 peu faire")
    .setFooter("Si vous avez un probleme demander de l'aide a un modo ou au autre")
    .addField("Commande magique",
      "magie!feu (-25PV) (utilisable 3 foix)\nmagie!tornade (-25PV)\nmagie!stick-magic (-15PV) (utilisable 3 foix)\nmagie!nature (-25PV)\nmagie!glace (-20PV)")
      .addField("Nombre de PV",
      "100PV pour un mage niveau 1")
  
    message.channel.send({embed});
}
if (message.content === "magie!help" ){  

    const embed = new Discord.RichEmbed()
    .setTitle("aide disponible ")
    .setColor(0x0086AE)
    .setDescription("magie!help 1\nmagie!help 2")
    .setFooter("Si vous avez un probleme demander de l'aide a un modo ou au autre")
  
    message.channel.send({embed});
}
if (message.content === "magie!help 2"){  

    const embed = new Discord.RichEmbed()
    .setTitle("Magie niveau 2")
    .setColor(0x0086AE)
    .setDescription("Voici toute les attaque qu'un mage niveau 2 peu faire")
    .setFooter("Si vous avez un probleme demander de l'aide a un modo ou au autre")
    .addField("Commande magique",
      "!eclair (-50PV) (utilisable 3 fois par match)\n!vent (-5) (cumulable avec une autre attaque pour ajouter 5 dégâts voir plus)\n!ice-axe : normal : 50 de dégâts. et à sec par une attaque !feu: 10 de dégâts \n!slach (-15PV)\n!implosion (-50PV) (utilisable 1 fois par combats)\n!protection : défend de 25 de dégâts (mais si l'attaque fait plus tu es obligé de te faire toucher) (utilisable 3 fois par combats)")
      .addField("Nombre de PV",
      "200PV pour un mage niveau 2")

    message.channel.send({embed});
}
}
)
