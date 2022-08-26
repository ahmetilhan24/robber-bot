import dotenv from "dotenv";

class Config {
  constructor() {
    this.init();
  }
  init() {
    dotenv.config();
  }
}

export default new Config();
