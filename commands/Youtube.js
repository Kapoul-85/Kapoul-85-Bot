const { SlashCommandBuilder } = require('@discordjs/builders');
const { MessageActionRow, MessageButton} = require ('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName("subscribe")
        .setDescription("Abonne toi a la chaine de SimuLQuest"),

    async execute (interaction){
        const row = new MessageActionRow()
            .addComponents(new MessageButton()
                .setLabel('Ma chaine')
                .setStyle('LINK')
                .setURL('https://www.youtube.com/channel/UCMTpndpPYkbe23Q1NM_GXrg/?sub_confirmation=1')
            );
        await interaction.reply({ content: 'Click sur le bouton', components: [row] });
    }
}