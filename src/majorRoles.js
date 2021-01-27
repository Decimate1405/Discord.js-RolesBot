const PREFIX = "!";
const { MessageEmbed } = require("discord.js");

module.exports = (client) => {
  client.on("message", async (message) => {
    if (message.author.bot) return;
    if (message.content.startsWith(PREFIX)) {
      const [CMD_NAME, ...args] = message.content
        .trim()
        .substring(PREFIX.length)
        .split(/\s+/);
      if (CMD_NAME === "majors") {
        const channel = "782997997272301629";

        // Roles
        const csRole = message.guild.roles.cache.find(
          (role) => role.name === "CS"
        );
        const cpeRole = message.guild.roles.cache.find(
          (role) => role.name === "CPE"
        );
        const eeRole = message.guild.roles.cache.find(
          (role) => role.name === "EE"
        );
        const aoeRole = message.guild.roles.cache.find(
          (role) => role.name === "AOE"
        );
        const marketingRole = message.guild.roles.cache.find(
          (role) => role.name === "Marketing Management"
        );
        const undecidedRole = message.guild.roles.cache.find(
          (role) => role.name === "Undecided"
        );
        const newRole = message.guild.roles.cache.find(
          (role) => role.name === "New Recruit"
        );

        // Emojis for the roles
        const csEmoji = "🧡";
        const cpeEmoji = "💙";
        const eeEmoji = "💛";
        const aoeEmoji = "💚";
        const marketingEmoji = "💜";
        const undecidedEmoji = "❤️";

        const embed = new MessageEmbed()
          .setTitle("Major Selection")
          .addFields({
            name: "Choose an emoji corresponding to your major",
            value: `${csEmoji} for CS \n ${cpeEmoji} for CPE \n ${eeEmoji} for EE \n ${aoeEmoji} for AOE \n ${marketingEmoji} for Marketing Management \n ${undecidedEmoji} for Undecided`,
          })
          .setThumbnail(
            "https://i.pinimg.com/originals/34/b6/c4/34b6c42f84486bd85d32c6513dca6101.png"
          )
          .setColor("BLURPLE");
        messageEmbed = await message.channel.send(embed);
        messageEmbed.react(csEmoji);
        messageEmbed.react(cpeEmoji);
        messageEmbed.react(eeEmoji);
        messageEmbed.react(aoeEmoji);
        messageEmbed.react(marketingEmoji);
        messageEmbed.react(undecidedEmoji);

        client.on("messageReactionAdd", async (reaction, user) => {
          if (reaction.message.partial) await reaction.message.fetch();
          if (reaction.partial) await reaction.fetch();
          if (user.bot) return;
          if (!reaction.message.guild) return;
          if (reaction.message.channel.id == channel) {
            if (reaction.emoji.name === csEmoji) {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add(csRole);
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(newRole);
            }
            if (reaction.emoji.name === cpeEmoji) {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add(cpeRole);
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(newRole);
            }
            if (reaction.emoji.name === eeEmoji) {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add(eeRole);
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(newRole);
            }
            if (reaction.emoji.name === aoeEmoji) {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add(aoeRole);
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(newRole);
            }
            if (reaction.emoji.name === marketingEmoji) {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add(marketingRole);
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(newRole);
            }
            if (reaction.emoji.name === undecidedEmoji) {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.add(undecidedRole);
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(newRole);
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
            if (reaction.emoji.name === csEmoji) {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(csRole);
            }
            if (reaction.emoji.name === cpeEmoji) {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(cpeRole);
            }
            if (reaction.emoji.name === eeEmoji) {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(eeRole);
            }
            if (reaction.emoji.name === aoeEmoji) {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(aoeRole);
            }
            if (reaction.emoji.name === marketingEmoji) {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(marketingRole);
            }
            if (reaction.emoji.name === undecidedEmoji) {
              await reaction.message.guild.members.cache
                .get(user.id)
                .roles.remove(undecidedRole);
            } else {
              return;
            }
          }
        });
      }
    }
  });
};
