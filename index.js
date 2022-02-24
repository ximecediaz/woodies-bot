const Discord = require("discord.js")
require("dotenv").config()
const generateImage = require("./generateImage")

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => {
    if (message.content == "hi") {
        message.reply("Hola Mundo")
    }
})

const gmChannelId = "946246512013344819"

client.on("guildMemberAdd", async(member) => {

    const img = await generateImage(member)
    member.guild.channels.cache.get(gmChannelId).send({
        content: `<@${member.id}> GM!`,
        files: [img]
    })
})

client.login(process.env.TOKEN)