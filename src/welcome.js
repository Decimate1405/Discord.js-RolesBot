const { MessageEmbed, Client } = require("discord.js");
const client = new Client({
  partials: ["MESSAGE", "REACTION", "CHANNEL"],
});

module.exports = (client) => {
  const rolesChannel = "782997997272301629";
  client.on("guildMemberAdd", (member) => {
    console.log(member);
    const message = `Welcome <@${
      member.id
    }>. Select a role in ${client.channels.cache.get(rolesChannel).toString()}`;

    client.channels.cache.get("798265379494690846").send(message);
    member.author.send("Lol");
  });
};
