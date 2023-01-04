const newsRouter = require('./news');
const siteRouter = require('./site');
const lecturersRouter = require('./lecturers');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/lecturers', lecturersRouter);
    app.use('/', siteRouter);
}

module.exports = route;
