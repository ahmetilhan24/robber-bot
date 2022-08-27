import COMMANDS from "../constants/command.constants";
import ICommand from "../interfaces/command.interface";

class HelpCommand {
  constructor() {}
  command: ICommand = {
    name: COMMANDS.help,
    description: "command for help",
    run: (client, interaction) => console.log(client, interaction),
  };
}

export default new HelpCommand();
