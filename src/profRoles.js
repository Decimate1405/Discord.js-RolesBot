const PREFIX = "!";
const { MessageEmbed, Client } = require("discord.js");
const client = new Client({
  partials: ["MESSAGE", "REACTION", "CHANNEL"],
});

module.exports = (client) => {
  client.on("message", async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
      const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);
      if (CMD_NAME === "profs") {
        if (message.member.hasPermission("ADMINISTRATOR")) {
          const channel = "782997997272301629";

          // Roles
          const buehrerRole = message.guild.roles.cache.find(
            (role) => role.name === "Buehrer"
          );
          const wyattRole = message.guild.roles.cache.find(
            (role) => role.name === "Wyatt"
          );
          const lanzerottiRole = message.guild.roles.cache.find(
            (role) => role.name === "Lanzerotti"
          );
          const herreraRole = message.guild.roles.cache.find(
            (role) => role.name === "Herrera"
          );
          const zhouRole = message.guild.roles.cache.find(
            (role) => role.name === "Zhou"
          );
          const hudaitRole = message.guild.roles.cache.find(
            (role) => role.name === "Hudait"
          );
          const aliRole = message.guild.roles.cache.find(
            (role) => role.name === "Ali"
          );
          const cooperRole = message.guild.roles.cache.find(
            (role) => role.name === "Cooper"
          );
          const sarkerRole = message.guild.roles.cache.find(
            (role) => role.name === "Sarker"
          );
          const yuRole = message.guild.roles.cache.find(
            (role) => role.name === "Yu"
          );
          const hannRole = message.guild.roles.cache.find(
            (role) => role.name === "Hann"
          );
          const baumannRole = message.guild.roles.cache.find(
            (role) => role.name === "Baunmann"
          );

          // Emojis for the roles
          const buehrerEmoji = "📡";
          const wyattEmoji = "🎙️";
          const lanzerottiEmoji = "☎️";
          const herreraEmoji = "🔋";
          const zhouEmoji = "💻";
          const hudaitEmoji = "🖱️";
          const aliEmoji = "📻";
          const cooperEmoji = "🕹️";
          const sarkerEmoji = "💵";
          const yuEmoji = "💴";
          const hannEmoji = "💶";
          const baumannEmoji = "💷";

          const embed = new MessageEmbed()
            .setTitle("Professor Selection")
            .addFields(
              {
                name: "Signals & Systems",
                value: `${buehrerEmoji} for Buehrer \n ${wyattEmoji} for Wyatt \n ${lanzerottiEmoji} for Lanzerotti`,
              },
              {
                name: "Physical Electronics",
                value: `${herreraEmoji} for Herrera \n ${zhouEmoji} for Zhou \n ${hudaitEmoji} for Hudait`,
              },
              {
                name: "Embedded Systems",
                value: `${aliEmoji} for Ali \n ${cooperEmoji} for Cooper`,
              },
              {
                name: "Integrated Design Project",
                value: `${sarkerEmoji} for Sarker \n ${yuEmoji} for Yu \n ${hannEmoji} for Hann \n ${baumannEmoji} for Baumann`,
              }
            )
            .setThumbnail(
              "https://i.pinimg.com/originals/34/b6/c4/34b6c42f84486bd85d32c6513dca6101.png"
            )
            .setColor("BLURPLE");
          messageEmbed = await message.channel.send(embed);
          messageEmbed.react(buehrerEmoji);
          messageEmbed.react(wyattEmoji);
          messageEmbed.react(lanzerottiEmoji);
          messageEmbed.react(herreraEmoji);
          messageEmbed.react(zhouEmoji);
          messageEmbed.react(hudaitEmoji);
          messageEmbed.react(aliEmoji);
          messageEmbed.react(cooperEmoji);
          messageEmbed.react(sarkerEmoji);
          messageEmbed.react(yuEmoji);
          messageEmbed.react(hannEmoji);
          messageEmbed.react(baumannEmoji);

          client.on("messageReactionAdd", async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id == channel) {
              if (reaction.emoji.name === buehrerEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.add(buehrerRole);
              }
              if (reaction.emoji.name === wyattEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.add(wyattRole);
              }
              if (reaction.emoji.name === lanzerottiEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.add(lanzerottiRole);
              }
              if (reaction.emoji.name === herreraEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.add(herreraRole);
              }
              if (reaction.emoji.name === zhouEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.add(zhouRole);
              }
              if (reaction.emoji.name === hudaitEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.add(hudaitRole);
              }
              if (reaction.emoji.name === aliEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.add(aliRole);
              }
              if (reaction.emoji.name === cooperEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.add(cooperRole);
              }
              if (reaction.emoji.name === sarkerEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.add(sarkerRole);
              }
              if (reaction.emoji.name === yuEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.add(yuRole);
              }
              if (reaction.emoji.name === hannEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.add(hannRole);
              }
              if (reaction.emoji.name === baumannEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.add(baumannRole);
              } else {
                return;
              }
            }
          });

          client.on("messageReactionRemove", async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            if (reaction.message.channel.id == channel) {
              if (reaction.emoji.name === buehrerEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.remove(buehrerRole);
              }
              if (reaction.emoji.name === wyattEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.remove(wyattRole);
              }
              if (reaction.emoji.name === lanzerottiEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.remove(lanzerottiRole);
              }
              if (reaction.emoji.name === herreraEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.remove(herreraRole);
              }
              if (reaction.emoji.name === zhouEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.remove(zhouRole);
              }
              if (reaction.emoji.name === hudaitEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.remove(hudaitRole);
              }
              if (reaction.emoji.name === aliEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.remove(aliRole);
              }
              if (reaction.emoji.name === cooperEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.remove(cooperRole);
              }
              if (reaction.emoji.name === sarkerEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.remove(sarkerRole);
              }
              if (reaction.emoji.name === yuEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.remove(yuRole);
              }
              if (reaction.emoji.name === hannEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.remove(hannRole);
              }
              if (reaction.emoji.name === baumannEmoji) {
                await reaction.message.guild.members.cache
                  .get(user.id)
                  .roles.remove(baumannRole);
              } else {
                return;
              }
            }
          });
        }
      } else {
        message.channel.send(
          "You do not have the permission to use this command."
        );
      }
    }
  });
};
