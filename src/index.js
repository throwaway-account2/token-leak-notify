import Discord from 'discord.js';

new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.MessageContent,
    Discord.GatewayIntentBits.GuildMessages
  ],
  partials: [
    Discord.Partials.Message,
    Discord.Partials.Channel
  ]
}).once('ready', x=>{
  console.log(`Ready as ${x.user.tag} (${x.user.id})`)
}).on('messageCreate', x=>{
  console.log('Message received in '+x.channel.name+', sending message...');
  x.channel.send('# You (the bot owner) have leaked the token!\nPlease reset it now before anyone does harmful things to your server(s)!')
}).login().catch(()=>console.error('Token seems to be invalid, which is good enough!'))
