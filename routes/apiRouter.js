var express = require('express')
const { Client,MessageEmbed } = require('discord.js')
const { token,customerRoleId } = require('../config.json')
const client = new Client()
var router = express.Router()
var bodyParser = require('body-parser')

router.use(bodyParser.json())

router.post('/getorder',async (req,res) => {
    try{
    const discID = req.body.custom_fields['Discord ID']
    const user = await client.users.fetch(discID)
    const guild = await client.guilds.fetch('843272415843844107')
    const guildRole = await guild.roles.fetch(customerRoleId)
    const guildMember = await guild.members.fetch(user)

    guildMember.roles.add(guildRole).then(async () => {
        const guild = await client.guilds.fetch('843272415843844107')
        const channel = guild.channels.cache.get('843485156110106625')
        const grantedRole = new MessageEmbed()
        .setTitle('Role Granted')
        .setDescription(`Hey, <@${discID}> I granted your role!`)
        .setColor('4BB543')
        .setFooter('Kamz Sellix')
        channel.send(`<@${discID}>`)
        channel.send(grantedRole)
    })
    res.send("cheers mate")
    } catch(e) {
        console.log(e)
        res.send("why are you here bro")
        
    }
})

client.login(token)
module.exports = router