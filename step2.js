"use strict";

const fsP = require('fs/promises');
const axios = require('axios');
const argv = process.argv;
const path = argv[2];


/** Reads and logs the contents of the file at the inputted path or prints an error. */
async function cat(path) {
  try {
    let contents = await fsP.readFile(path, "utf-8");
    console.log(contents);
  } catch (err) {
    console.log(err); // TODO: console.error
    process.exit(1);
  }
}

/** Reads and logs the html of a webpage at the inputted path or prints an error. */ // TODO: input URL
async function webCat(path) {
    try {
        let html = await axios.get(path); // this is resp, not html
        console.log(html.data);
    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}


/** Determines if inputted path is URL or local file and calls corresponding function. */
function printPath(path) { // TODO: fetchContents
    if (path.startsWith('http')) {
        // console.log('webcat gets called');
        webCat(path); // TODO: since we're not awaiting this, it could easily lead to a bug if something gets added next
    } else {
        // console.log('cat gets called');
        cat(path);
    }
}


printPath(path);