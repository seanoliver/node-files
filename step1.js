"use strict";

const fsP = require('fs/promises');
const argv = process.argv;
const path = argv[2];

async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf-8");
    console.log(contents)
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
}

cat(path);