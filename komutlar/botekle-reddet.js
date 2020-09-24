const Discord = require("discord.js");

exports.run = function(client, message, args) {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(" Bu komutu kullanabilmek için Yönetici yetkisine sahip olmalısın.");
  let botisim = args[0];
  let user = message.mentions.users.first()  || client.users.get(args[0])
  let sebep = args[2];

  let log = "758298876657795094"; // bot eklendi / onaylandı / reddedildi kanalı

  if (!botisim)
    return message.channel
      .send("x Botun idsini yazmalısın.")
      .then(msg => msg.delete(10000));
  if (!sebep)
    return message.channel
      .send("x Botu neden onaylamadığını yazmalısın.")
      .then(msg => msg.delete(10000));
  if (!user)
    return message.channel
      .send("x Bot Sahibi id yazman lazım.")
      .then(msg => msg.delete(10000));
  message.delete();
  client.channels
    .get(log)
    .send(`x ${user.username} adlı kişini <@${botisim}> adlı botu \ ${sebep} \ sebebiyle reddedildi. `);
  message.channel.send("x Botu reddettiniz.`").then(msg => msg.delete(10000));
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-reddet", "reddet"],
  permLevel: 0
};

exports.help = {
  name: "red",
  description: "Sunucuya eklenen botu reddeder.",
  usage: "botreddet <bot ismi> - <sebep>"
};