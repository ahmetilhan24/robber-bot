import { Client } from "discord.js";
import Config from "./config";

class Bot {
  constructor() {
    Config.init();
    this.init();
  }
  //create client
  client: Client = new Client({
    intents: [],
  });
  //auth
  async login(): Promise<void> {
    await this.client.login(process.env.BOT_TOKEN);
  }
  //bot listeners
  listeners() {
    this.client.on("ready", () => {
      console.log(this.client.user);
    });
  }

  //bot init
  async init() {
    const isLogin: void = await this.login();
    if (typeof isLogin == "undefined") {
      this.listeners();
    }
  }
}

// Start bot
new Bot();
