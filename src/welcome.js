const { MessageEmbed, Client } = require("discord.js");
const client = new Client({
  partials: ["MESSAGE", "REACTION", "CHANNEL"],
});

module.exports = (client) => {
  client.on("guildMemberAdd", (member) => {
    const channel = "798265379494690846";
    const rolesChannel = "800556485209489438";
    console.log(member);
    const message = `Welcome <@${
      member.id
    }>. Select a role in ${rolesChannel.toString()}`;

    channel.send(message);
    message.member.send("Hi");
    message.author.send("Lol");
  });
};
