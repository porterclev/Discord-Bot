const fs = require("fs");
/**
 * description: gets all files in a directory
 * @param {string} dir - directory to get files from
 * @param {string} suffix - file type to get
 * @returns {array} - array of file paths (strings)
 
 */
const getFiles = (dir, suffix) => {
  const files = fs.readdirSync(dir, {
    withFileTypes: true,
  });

  let commandFiles = [];

  for (const file of files) {
    if (file.isDirectory()) {
      commandFiles = [commandFiles, getFiles(`${dir}/${file.name}`, suffix)];
    } else if (file.name.endsWith(suffix)) {
      commandFiles.push(`${dir}/${file.name}`);
    }
  }

  return commandFiles;
};
module.exports = getFiles;
