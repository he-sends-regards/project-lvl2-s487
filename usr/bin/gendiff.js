#!/usr/bin/env node

const program = require('commander');

program
  .arguments('<firstConfig> <secondConfig>')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .option('-f, --format [type]', 'Output format');
// .action((firstConfig, secondConfig) => {});

program.parse(process.argv);
