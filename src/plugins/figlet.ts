//@ts-ignore
import figlet from "figlet";
const writeBotNameToConsole = () => {
  figlet("Robber", function (err: any, data: any) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
};
export default writeBotNameToConsole;
