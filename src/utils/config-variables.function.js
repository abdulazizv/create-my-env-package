const fs = require("node:fs");
const path = require("node:path");
const parseVariable = require('./parse-variable.function.js'); // Adjust the path as necessary

const fileName = path.join(process.cwd(), '.env');

function config() {
    try {
        const fileContent = fs.readFileSync(fileName);
        const contentString = fileContent.toString();
        const vars = parseVariable(contentString);

        vars.forEach((v) => process.env[v[0]] = v[1]);
    } catch (err) {
        console.error('Error loading configuration:', err);
    }
}

module.exports = config;
