const { MessageEmbed, Client } = require("discord.js");
const client = new Client({
  partials: ["MESSAGE", "REACTION", "CHANNEL"],
});

module.exports = (client) => {
  const rolesChannel = "782997997272301629";
  client.on("guildMemberAdd", (member) => {
    const message = `Welcome <@${
      member.id
    }> to our global union and revolution. Select a role in ${client.channels.cache
      .get(rolesChannel)
      .toString()}`;
    client.channels.cache.get("807289646350336040").send(message);
  });
};
