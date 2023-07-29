require('dotenv').config();

const app = require('./app');

const PORT = process.env.PORT || 8888;

app.listen(5400, () => {
    console.log(`listening on port ${PORT}...`)
})