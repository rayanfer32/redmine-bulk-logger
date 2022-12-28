const fs = require('fs');

const BUILD_FILE_PATH = 'dist.js';

async function extractText(filePath, startText, endText) {
  // Read the file contents into a string
  const fileContents = await fs.promises.readFile(filePath, 'utf8');

  // Find the starting index of the target text
  const startIndex = fileContents.indexOf(startText);
  if (startIndex === -1) {
    throw new Error(`Start text "${startText}" not found in file`);
  }

  // Find the ending index of the target text
  const endIndex = fileContents.indexOf(endText, startIndex + startText.length);
  if (endIndex === -1) {
    throw new Error(`End text "${endText}" not found in file`);
  }

  // Extract the target text
  return fileContents.substring(startIndex + startText.length, endIndex);
}

async function main() {
  const htmlPart = await extractText(
    'view.html',
    '<!-- INJECT START -->',
    '<!-- INJECT END -->'
  );
  const cssPart = await fs.promises.readFile('./styles.css', 'utf8');
  const JsPart = await fs.promises.readFile('./script.js', 'utf8');

  const injectionCode =
    // * avoid setting dom directly , lets set it to a window variable and use it as needed.
    'window.BL_TABLE_DOM = `' +
    htmlPart +
    '`;\n' +
    "const INJECTED_CSS = document.createElement('style');INJECTED_CSS.textContent = `\n" +
    cssPart +
    '`;\n' +
    'document.head.append(INJECTED_CSS)' +
    ';\n' +
    JsPart;
  await fs.promises.writeFile('dist.js', injectionCode);
}

main();
