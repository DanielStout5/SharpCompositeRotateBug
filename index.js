const sharp = require("sharp");

async function exec() {
  let img = await sharp("img.jpg").toBuffer();

  await sharp({
    create: {
      width: 1500,
      height: 1125,
      channels: 3,
      background: "#000",
    },
  })
    .composite([
      {
        input: img,
      },
    ])
    .rotate(90)
    .toFile("out.jpg");
}

exec();
