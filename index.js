const Discord = require("discord.js")
require("dotenv").config()

const TOKEN = "OTM4OTUwNDQ4NjA4NTkxOTMy.Yfxvvw.TGf1RT2NN7eCw9ZT1uzzBQu7-EI"

const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES"
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

client.login(process.env.TOKEN)