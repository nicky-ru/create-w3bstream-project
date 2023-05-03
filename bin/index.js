#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const { spawnSync } = require("child_process");
const ora = require("ora");
const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

const argv = yargs(hideBin(process.argv))
  .option("template", {
    alias: "t",
    type: "string",
    description: "Choose a template",
    choices: ["default", "light"],
  })
  .demandCommand(1, "Please provide a project name").argv;

const projectName = process.argv[2] || "simulator-app";
const projectPath = path.join(process.cwd(), projectName);
const selectedTemplate = argv.template || "default";

// Create project directory
fs.ensureDirSync(projectPath);

const subdirs = ["simulator", "w3bstream-applet", "blockchain"];

const TEMPLATE_DIR_NAME = "../templates";

// Copy template files
const templatePath = path.join(__dirname, TEMPLATE_DIR_NAME, selectedTemplate);
fs.copySync(templatePath, projectPath);

subdirs.forEach((subdir) => {
  const templateSubdirPath = path.join(
    __dirname,
    TEMPLATE_DIR_NAME,
    selectedTemplate,
    subdir
  );
  const projectSubdirPath = path.join(projectPath, subdir);
  fs.copySync(templateSubdirPath, projectSubdirPath);
});

// Change to the new project directory
process.chdir(projectPath);

const spinner = ora(
  "Installing dependencies with npm. This may take a few minutes."
).start();

subdirs.forEach((subdir) => {
  console.log(`Installing dependencies for ${subdir}...`);
  process.chdir(path.join(projectPath, subdir));
  spawnSync("npm", ["install"], { stdio: "inherit" });
});

spinner.succeed("Dependencies installed!");

console.log(`\n🎉  Project ${projectName} is ready!`);
console.log(`\nTo get started with Simulator, type the following commands:`);
console.log(`cd simulator`);
console.log(`touch .env`);
console.log("Add your w3bstream vars to .env file");
console.log(`npm start`);

console.log(
  `\nTo get started with w3bstream-applet, type the following commands:`
);
console.log(`cd w3bstream-applet`);
console.log(`npm run asbuild`);
