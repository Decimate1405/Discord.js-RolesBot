const { MessageEmbed, Client } = require("discord.js");
const client = new Client({
  partials: ["MESSAGE", "REACTION", "CHANNEL"],
});

module.exports = (client) => {
  //const channelID = "798265379494690846";
  const rolesChannel = "800556485209489438";
  client.on("guildMemberAdd", (member) => {
    console.log(member);
    const message = `Welcome <@${
      member.id
    }>. Select a role in ${client.channel.cache.get(rolesChannel).toString()}`;

    //const channel = member.guild.channels.cache.get(channelID);
    client.channels.cache.get("798265379494690846").send(message);
    //message.member.send("Hi");
    //message.author.send("Lol");
  });
};
