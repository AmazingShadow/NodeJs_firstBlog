const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] /
    index(reg, res, next) {

        // Thao tác với Model để lấy dữ liệu ra
        Course.find({})
            .then(courses => {
                res.render('home', {
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next)
    }

    // [GET] / search
    search(reg, res) {
        return res.render('search');
    }
}

module.exports = new SiteController();
