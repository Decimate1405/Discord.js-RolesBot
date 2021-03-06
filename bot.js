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
const joinSim = require("./src/joinSim");
const serverInfo = require("./src/serverInfo");

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
  joinSim(client);
  serverInfo(client);
});

client.login(process.env.TOKEN);
