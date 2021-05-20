const axios = require('axios')
const { sellix_token } = require('../config.json')
const { MessageEmbed } = require('discord.js')

module.exports = {
    name: 'getorder',
    description: 'fetches a orders info',
    execute(message,args) {
        const orderId = args[0]

        axios.get(`https://dev.sellix.io/v1/orders/${orderId}`,{ headers: { 'authorization': 'Bearer '+sellix_token }}).then(res => {
            const orderObj = res.data.data.order
            const infoEmbed = new MessageEmbed()
            .setTitle('Order Information')
            .setDescription('Order Id '+ orderId)
            .addFields(
                {name:'Email',value: orderObj.customer_email },
                {name:'Product Name', value: orderObj.product_title},
                {name:'Price', value: orderObj.total},
                {name:'Sale Time', value: orderObj.created_at},
                {name:'Gateway', value: orderObj.gateway},
                {name:'Quanity', value: orderObj.quantity},
                {name:'Status',value: orderObj.status},
                {name:'Crypto Address', value: orderObj.crypto_address})
            .setColor('#B8390E')
            message.author.send(infoEmbed)
        })
        .catch(err => {
            message.channel.send('There was an error trying to fetch that information. Please try again later.')
        })
    }
}