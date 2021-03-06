require("dotenv").config();

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

const ping = require("./ping");
const profRoles = require("./profRoles");
const majorRoles = require("./majorRoles");

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
});

//client.login(process.env.DISCORDJS_BOT_TOKEN);
client.login("NDg0NDY1Mzk2MTYyNzU2NjI4.W4cHjw.N_kuWbsT_pC7uwXfmouLY42dq8M");
