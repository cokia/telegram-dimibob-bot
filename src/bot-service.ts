import * as Telebot from 'telebot'
import * as env from '../environment/environment-handler'

class BotService {
  
  private static instance = new BotService();
  
  private bot;
  
  constructor() {
    if (!!BotService.instance) return BotService.instance;
    
    // @ts-ignore
    this.bot = new Telebot(env.telegram.token);
    this.bot.on('text', this.textMessageHandler.bind(this));
  }

  private textMessageHandler(msg): void {
    console.log(msg);
  }

}

export default new BotService;