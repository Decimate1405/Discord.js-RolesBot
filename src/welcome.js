const channelID = "798265379494690846";
const rolesChannel = "800556485209489438";

module.exports = (client) => {
  client.on("guildMemberAdd", (member) => {
    console.log(member);
    const message = `Welcome <@${
      member.id
    }>. Select a role in ${member.guild.channels.get(rolesChannel).toString()}`;

    const channel = member.guild.channels.cache.get(channelID);
    channel.send(message);
    message.member.send("Hi");
    message.author.send("Lol");
  });
};
