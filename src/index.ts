import { Client, Partials, GatewayIntentBits, Message } from "discord.js";
import Config from "./config";
import BotCommands from "./commands";
import Interactions from "./interactions";
import SpamListener from "./listeners/spam.listener";
class Bot {
  private token: string | undefined = process.env.BOT_TOKEN;
  constructor() {
    Config.init();
  }

  //create client
  public client: Client = new Client({
    partials: [Partials.Channel, Partials.Message, Partials.Reaction],
    intents: [
      GatewayIntentBits.Guilds,
      GatewayIntentBits.GuildMessages,
      GatewayIntentBits.MessageContent,
      GatewayIntentBits.DirectMessages,
      GatewayIntentBits.GuildBans,
    ],
  });

  //auth
  async login(): Promise<void> {
    await this.client.login(this.token);
  }

  //bot listeners
  listeners() {
    this.client.on("ready", () => {
      console.log("Bot is active");
    });
    this.client.on("messageCreate", (msg: Message) => {
      let fromRobber = this.client.user?.id === msg.author?.id;
      if (fromRobber) return;
      new SpamListener(this.client, msg);
    });
  }

  //bot init
  async init() {
    await this.login();
    if (!this.client.user || !this.client.application) {
      return;
    }
    this.listeners();
    new BotCommands(this.client).init();
    new Interactions(this.client).create();
  }
}

// Start bot
const robber = new Bot();
robber.init();
