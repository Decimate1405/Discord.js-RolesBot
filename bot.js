const {
  Client,
  WebhookClient,
  MessageAttachment,
  MessageEmbed,
  GuildMember,
} = require("discord.js");

const client = new Client({
  partials: ["MESSAGE", "REACTION"],
});

const ping = require("./src/ping");
const profRoles = require("./src/profRoles");
const majorRoles = require("./src/majorRoles");
const welcome = require("./src/welcome");

const webhookClient = new WebhookClient(
  process.env.WEBHOOK_ID,
  process.env.WEBHOOK_TOKEN
);

// Bot Ready
client.on("ready", async () => {
  console.log(`${client.user.tag} has logged in.`);

  ping(client);
  profRoles(client);
  majorRoles(client);
  welcome(client);
});

client.on("guildMemberAdd", (member) => {
    const channelID = "798265379494690846";
    const rolesChannel = "800556485209489438";
    console.log(member);
    const message = `Welcome <@${
      member.id
    }>. Select a role in ${client.guild.channels.get(rolesChannel).toString()}`;

    const channel = client.guild.channels.cache.get(channelID);
    channel.send(message);
    message.member.send("Hi");
    message.author.send("Lol");
  });

client.login(process.env.TOKEN);
