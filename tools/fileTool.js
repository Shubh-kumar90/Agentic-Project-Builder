const fs = require("fs");
const path = require("path");

function saveFile(fileName, content) {

    const generatedDir =
        path.join(__dirname, "..", "generated");

    if (!fs.existsSync(generatedDir)) {
        fs.mkdirSync(generatedDir);
    }

    const filePath =
        path.join(generatedDir, fileName);

    fs.writeFileSync(filePath, content);

    return filePath;
}

module.exports = {
    saveFile
};