import meow from "meow";

const cli = meow(
  `
    Usage
      $ create-simulator-app <project-name> [options]
  
    Options
      --blockchain, -b  Include a blockchain template
      --simulator, -s   Include a simulator template
      --applet, -a      Include an applet template
      --erc20, -e       Include an ERC20 template
      --erc721, -n      Include an ERC721 template
      --help            Display this message
  
    Examples
      $ create-simulator-app my-w3bstream-app
      $ create-simulator-app my-w3bstream-app --blockchain --simulator --applet
      $ create-simulator-app my-w3bstream-app -b -s -a
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
