#!/usr/bin/env node
'use strict';
const meow = require('meow');
const zapToTap = require('./');

const cli = meow({
  help: `
    Usage
      $ ... | zap-to-tap
  `,
});

process.stdin
  .pipe(zapToTap.stream())
  .pipe(process.stdout);
