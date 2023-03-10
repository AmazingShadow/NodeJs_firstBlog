const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const path = require('path');
const app = express();
const port = 3000;

const route = require('./routes');

// import database
const db = require('./config/db');

// connect to database
db.connect();

app.use(express.static(path.join(__dirname, 'public')));

// middle ware
// form
app.use(
    express.urlencoded({
        extended: true,
    }),
);

// other
app.use(express.json());

// Http logger
// app.use(morgan('combined'));

// Template egine
app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    }),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
