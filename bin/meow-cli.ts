import meow, { Result } from "meow";
import { Flags } from "./types";

const cli: Result<Flags> = meow(
  `
    Usage
      $ npx create-w3bstream-project <project-name> [options]
  
    Options
      --blockchain, -b  Include a blockchain template
      --simulator, -s   Include a simulator template
      --applet, -a      Include an applet template
      --erc20, -e       Include an ERC20 template
      --erc721, -n      Include an ERC721 template
      --help            Display this message
  
    Examples
      $ npx create-w3bstream-project
      $ npx create-w3bstream-project simple-grid-with-token --blockchain --erc20
      $ npx create-w3bstream-project energy-meter-simulator -s
    `,
  {
    importMeta: import.meta,
    flags: {
      blockchain: {
        type: "boolean",
        shortFlag: "b",
      },
      simulator: {
        type: "boolean",
        shortFlag: "s",
      },
      applet: {
        type: "boolean",
        shortFlag: "a",
      },
      erc20: {
        type: "boolean",
        shortFlag: "e",
      },
      erc721: {
        type: "boolean",
        shortFlag: "n",
      },
    },
  }
);

export default cli;
