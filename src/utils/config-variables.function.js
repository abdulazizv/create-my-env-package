const fs = require('node:fs');

const fileName = `${process.cwd()}/.env`;
export default function config() {
    const fileContent = fs.readFileSync(fileName);
    const contentString = fileContent.toString();
    const vars = parseVariable(contentString);

    vars.forEach((v) => process.env[v[0]] = v[1])
}

