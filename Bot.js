const TelegramBot = require('node-telegram-bot-api');

// Token de tu bot
const token = '7666643133:AAF5HaAa5v8g92MwkC72XOWHXU6ssYxkiHM';

// Crear una instancia del bot
const bot = new TelegramBot(token, { polling: true });

// Manejar el comando /start
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  const options = {
    reply_markup: {
      inline_keyboard: [
        [
          {
            text: 'Play',
            url: 'https://topercraft.github.io/'
          }
        ]
      ]
    }
  };

  bot.sendMessage(chatId, '¡Hola! Pulsa el botón de abajo para jugar.', options);
});

console.log('Bot está corriendo...');
