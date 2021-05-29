const express = require('express');

const app = express();

app.get('/', (req, res) => {
        res.send('Manchester is Blue.');
    });

const port = process.env.PORT || 3000;
app.listen(port, () => {
        console.log('listening on port %s.\n', port);
    });

module.exports = app;