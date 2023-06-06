const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const axios = require("axios");
const dot = require("dotenv");
const { PORT } = process.env;

dot.config();
axios.default.baseURL = "http://localhost:3002";

var local = "";

if (process.env.PORT == 3003) {
  local = "http://localhost:3003";
} else {
  local = "";
}

// Syncing all the models at once.
console.log(process.env.PORT);
conn.sync({ alter: true }).then(() => {
  server.listen(process.env.PORT, () => {
    console.log("\x1b[33m%s\x1b[0m", `server listening at ${PORT}`); // eslint-disable-line no-console
  });
});
