import ICommand from "../interfaces/command.interface";

class CryptoCommand {
  constructor() {}
  command: ICommand = {
    name: "crypto",
    description: "command for crypto",
    run: (client, interaction) => console.log(client, interaction),
  };
}

export default new CryptoCommand();
