import ICommand from "../interfaces/command.interface";

class CryptoCommand {
  constructor() {}
  command: ICommand = {
    name: "crypto",
    description: "command for crypto",
    run: (msg, args) => console.log(msg, args),
  };
}

export default new CryptoCommand();
