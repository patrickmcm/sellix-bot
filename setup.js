const { writeFileSync } = require('fs')
const readline = require('readline')
let config = require('./config.json')

const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
})

rl.question('What is your bot token? ',a => {
    config.token = a
    rl.question('What is your Sellix API key? ',a => {
         config.sellix_token = a
             rl.question('Please enter the role ID that customers will recieve when they buy your product. ',a => {
                config.customerRoleId = a
                rl.question('Please enter the ID of the channel that will be used to notify customers when they receive the role. ', a => {
                    config.useralertChannelId = a
                    rl.question('Please enter your userId, you will have access to the !getorder command. ', a => {
                        config.ownerId = a
                        rl.question('Please enter the bot prefix of your choice (e.g. !) ', a => {
                            config.prefix = a
                            rl.question('Finally, Please enter your guild Id. ', a => {
                                config.guildId = a
                                writeFileSync('config.json',JSON.stringify(config,null,4),'utf-8')
                                console.log("Config Setup complete, please read through the rest of the README. ")
                           })
                       })
                   })
               })
           })
    })  
})