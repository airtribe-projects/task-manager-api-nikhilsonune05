require("dotenv").config();
const app = require('./src/app');

const PORT = process.env.PORT || 4000;

const server = app.listen(PORT, () => {
    console.log("Bingo on PORT ", PORT);
});

module.exports = server;