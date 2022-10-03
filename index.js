#!/usr/bin/env node

const fs = require('fs/promises');
const path = require('path');
const prompts = require('prompts');
const validatePackageName = require('validate-npm-package-name');

async function main() {
  const projectName = await resolveProjectName();
  await instantiateTemplate(projectName);
}

async function resolveProjectName() {
  const nameFromParam = process.argv[2];
  if (nameFromParam != null) return nameFromParam;

  const { projectName: nameFromPrompt } = await prompts({
    type: 'text',
    name: 'projectName',
    message: 'Project name',
    initial: 'reveal-slides',
    validate: (name) => validatePackageName(name),
  });
  return nameFromPrompt.trim();
}

async function instantiateTemplate(projectName) {
  await copyTemplateTo(projectName);
}

async function copyTemplateTo(destination) {
  const templateDir = path.join(__dirname, 'template');
  await fs.cp(templateDir, destination, { recursive: true });
}

main();
