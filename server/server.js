const path = require("path");
const fs = require("fs");

const chirps = [
  { postNumber: 1, text: "beans1" },
  { postNumber: 2, text: "beans2" },
  { postNumber: 3, text: "beans3" },
  { postNumber: 4, text: "beans4" },
  { postNumber: 5, text: "beans5" },
];

const chirpsPath = path.join(__dirname, "../chirps.json");

fs.writeFileSync(chirpsPath, JSON.stringify(chirps));

const readChirps = JSON.parse(fs.readFileSync(chirpsPath).toString());

console.log(readChirps);
