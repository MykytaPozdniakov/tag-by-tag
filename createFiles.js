const fs = require('fs');
const path = require('path');

const pageName = process.argv[2];
if (!pageName) {
  console.error('Please provide a page name');
  process.exit(1);
}

const basePath = path.join(__dirname, 'src', 'pages', pageName);

fs.mkdirSync(basePath, { recursive: true });

const indexContent = `
import ${pageName} from './${pageName}';

export default ${pageName};
`;

fs.writeFileSync(path.join(basePath, 'index.js'), indexContent);
fs.writeFileSync(path.join(basePath, `${pageName}.stories.js`));
fs.writeFileSync(path.join(basePath, `${pageName}.jsx`), '');
fs.writeFileSync(path.join(basePath, `${pageName}.css`), '');
