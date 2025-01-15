import TelegramBot from 'node-telegram-bot-api';
import dotenv from 'dotenv';

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN;
if (!token) {
  throw new Error('TELEGRAM_BOT_TOKEN is not set in environment variables');
}

const webAppUrl = process.env.NEXT_PUBLIC_WEBAPP_URL;
if (!webAppUrl) {
  throw new Error('NEXT_PUBLIC_WEBAPP_URL is not set in environment variables');
}

const bot = new TelegramBot(token, {polling: true});

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;
  
  bot.sendMessage(chatId, 'Добро пожаловать в FPI Bank!', {
    reply_markup: {
      keyboard: [[{text: 'Открыть приложение FPI Bank', web_app: {url: webAppUrl}}]],
      resize_keyboard: true,
      one_time_keyboard: false
    }
  });
});

console.log('Бот запущен');

