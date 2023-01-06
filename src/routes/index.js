const newsRouter = require('./news');
const siteRouter = require('./site');
const lecturersRouter = require('./lecturers');
const coursesRouter = require('./courses');

function route(app) {
    app.use('/news', newsRouter);
    app.use('/lecturers', lecturersRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);
}

module.exports = route;
