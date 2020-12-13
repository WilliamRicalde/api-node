const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use('/api', require('./routes/routes'));

app.listen(port, () => {
    console.log('Server on port ', port);
})