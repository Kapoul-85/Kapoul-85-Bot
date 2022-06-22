const fs = require('fs');
const { Client, Collection, Intents } = require('discord.js');
const { token, guildId } = require('./config.json');

const handleCommand = require('./helpers/command');

const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

client.commands = new Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.data.name, command);
}

client.once('ready', () => {
    console.log("KapoulBot is started");

    const statuses = [
        () => `Communauté de Kapoul 85`,
        () => `En cours de développement...`
    ]

    let i = 0;
    setInterval( () =>{
        client.user.setActivity(statuses[i](), {type: 'PLAYING'})
        i = ++i % statuses.length
    }, 30)
});

client.on('interactionCreate', async interaction => {
    if(interaction.isCommand()) handleCommand(client, interaction);
});

client.login(process.env.TOKEN);