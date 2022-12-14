import COMMANDS from "../constants/command.constants";
import ICommand from "../interfaces/command.interface";

class CryptoCommand {
  constructor() {}
  command: ICommand = {
    name: COMMANDS.crypto,
    description: "command for crypto",
    run: (client, interaction) => console.log(client, interaction),
  };
}

export default new CryptoCommand();
