const fs = require('fs');
const path = require('path');

const svgDirPath = path.join(__dirname, '/svg');
const outputPath = path.join(__dirname, '/public/icons.json');

const iconData = fs.readdirSync(svgDirPath).map((iconFileName) => {
  return {
    name: path.basename(iconFileName, '.svg'),
    svg: fs.readFileSync(path.join(svgDirPath, iconFileName)).toString('utf-8'),
  };
});

fs.writeFileSync(outputPath, JSON.stringify(iconData, null, 2));
console.log(`Loaded ${iconData.length} icons.`);