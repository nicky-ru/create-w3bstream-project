import fs from "fs-extra";
import path from "path";
import enquirer from "enquirer";
import { Result } from "meow";

import { Flags } from "../types";

export async function normalizeArgs(cli: Result<Flags>) {
  const directory = await normalizeDirectory(cli);
  await normalizeBlockchain(cli);

  let erc20 = cli.flags.erc20;
  let erc721 = cli.flags.erc721;

  if (cli.flags.blockchain) {
    const blockchainFeatures = await normalizeBlockchainFeatures(cli);
    erc20 = blockchainFeatures.erc20;
    erc721 = blockchainFeatures.erc721;
  }

  let simulator = cli.flags.simulator;
  if (!simulator) {
    simulator = await promtConfirmation("simulator");
  }

  return {
    directory,
    blockchain: cli.flags.blockchain || false,
    erc20,
    erc721,
    simulator,
  };
}

async function normalizeDirectory(cli: Result<Flags>) {
  let directory = cli.input[0];
  if (!directory) {
    directory = await promptDir();
  }
  return path.resolve(directory);
}

async function normalizeBlockchain(cli: Result<Flags>) {
  if (!cli.flags.blockchain) {
    cli.flags.blockchain = await promtConfirmation("blockchain");
  }
}

async function normalizeBlockchainFeatures(cli: Result<Flags>) {
  let erc20 = cli.flags.erc20;
  let erc721 = cli.flags.erc721;

  if (!erc20) {
    erc20 = await promtConfirmation("erc20");
  }

  if (!erc721) {
    erc721 = await promtConfirmation("erc721");
  }

  return {
    erc20,
    erc721,
  };
}

async function promptDir() {
  const { directory } = (await enquirer.prompt({
    type: "input",
    name: "directory",
    message:
      "What directory should create-w3bstream-project generate your app into?",
    initial: "my-w3bstream-app",
    validate: (input) => {
      if (fs.existsSync(input)) {
        return `Directory ${input} already exists. Please try again.`;
      }
      return true;
    },
  })) as { directory: string };
  return directory;
}

async function promtConfirmation(tmpName: string) {
  const res = (await enquirer.prompt({
    type: "confirm",
    name: tmpName,
    message: `Include a ${tmpName} template?`,
    initial: true,
  })) as { [key: string]: boolean };
  return res[tmpName] as boolean;
}
