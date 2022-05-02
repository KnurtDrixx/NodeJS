const rp = require("request-promise");
const path = require("path");
const fs = require("fs");

const downloadPath = path.join(__dirname, "/downloads");

const valid_image_types = [".gif", ".jpeg", ".jpg", ".png"];

rp("https://www.reddit.com/r/popular.json", (err, res, body) => {
  if (err) console.log(err);

  const posts = JSON.parse(body).data.children;
  posts.forEach((post) => {
    const URL = post.data.url_overridden_by_dest;
    const ID = post.data.id;

    if (URL) {
      const extension = path.extname(URL);

      if (valid_image_types.includes(extension)) {
        const fileName = ID + extension;
        const filePath = path.join(downloadPath, fileName);
        rp(URL).pipe(fs.createWriteStream(filePath));
      }
    }
  });
});

// fs.writeFileSync(redditDataPath, res.body, (err) => {
//   console.log(err);
// });
//!set this to grab articles from reddit
//! figure out how to download jpg , gif, and png
