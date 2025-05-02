const express = require('express');
const app = express();

const taskRoutes = require('./routes/taskRoutes');
const logger = require('./middlewares/logger')

app.use(express.json());
app.use(logger);


app.get('/', (req, res) => {
    return res.send("Hello World!!");
});

app.use('/api/v1/tasks/', taskRoutes);

module.exports = app;