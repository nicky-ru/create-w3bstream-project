#!/usr/bin/env node

const fs = require("fs-extra");
const path = require("path");
const { spawnSync } = require("child_process");

const projectName = process.argv[2] || "simulator-app";
const projectPath = path.join(process.cwd(), projectName);

// Create project directory
fs.ensureDirSync(projectPath);

const subdirs = ["simulator", "w3bstream-applet", "blockchain"];

const TEMPLATE_DIR_NAME = "starter";

// Copy template files
const templatePath = path.join(__dirname, TEMPLATE_DIR_NAME);
fs.copySync(templatePath, projectPath);

subdirs.forEach((subdir) => {
  const templateSubdirPath = path.join(__dirname, TEMPLATE_DIR_NAME, subdir);
  const projectSubdirPath = path.join(projectPath, subdir);
  fs.copySync(templateSubdirPath, projectSubdirPath);
});

// Change to the new project directory
process.chdir(projectPath);

subdirs.forEach((subdir) => {
  console.log(`Installing dependencies for ${subdir}...`);
  process.chdir(path.join(projectPath, subdir));
  spawnSync("npm", ["install"], { stdio: "inherit" });
});

console.log(`\nProject ${projectName} is ready!`);
console.log(`\nTo get started, type the following commands:`);
console.log(`cd ${projectName}`);
console.log(`npm start`);
