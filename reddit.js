const rp = require("request-promise");
const path = require("path");
const fs = require("fs");

let redditDataPath = path.join(__dirname, "./data.json");
let popArtPath = path.join(__dirname, "./popular-articles.json");

const allPostsArray = [];

rp("https://www.reddit.com/r/popular.json", (err, res, body) => {
  if (err) console.log(err);

  JSON.parse(body).data.children.forEach((item) => {
    const post = { title: item.data.title, url: item.data.url, author: item.data.author_fullname };

    allPostsArray.push(post);
  });
  fs.writeFileSync(popArtPath, JSON.stringify(allPostsArray) + `\n`);

  // fs.writeFileSync(redditDataPath, res.body, (err) => {
  //   console.log(err);
  // });
});
