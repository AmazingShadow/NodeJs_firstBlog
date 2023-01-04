class Lecturers {

    // [GET] / lecturers
    index(req, res) {
        return res.render('lecturers');
    }
}

module.exports = new Lecturers;
