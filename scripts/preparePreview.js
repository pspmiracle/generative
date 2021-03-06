const jimp = require('jimp');
const shell = require('shelljs');

const maxWidth = 300;
const maxHeight = 300;

(async () => {
  for (const file of process.argv.slice(2)) {
    const image = await jimp.read(file);

    const {
      bitmap: { width, height },
    } = image;

    if (width >= maxWidth || height >= maxHeight) {
      if (width >= height) {
        const ratio = width / height;
        await image.resize(maxWidth * ratio, maxHeight);
      } else {
        const ratio = height / width;
        await image.resize(maxWidth, maxHeight * ratio);
      }

      const resultFileName = file.replace(/\.(png|jpg|jpeg)$/, '_sm.jpg');
      await image.quality(90).writeAsync(resultFileName);

      shell.exec(`git add ${resultFileName}`);
    }
  }
})();
