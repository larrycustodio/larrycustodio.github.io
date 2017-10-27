const express = require('express');
const app = express();

app.post('/', (req, res) => {
    res.json(req.body);
});

module.exports = app;