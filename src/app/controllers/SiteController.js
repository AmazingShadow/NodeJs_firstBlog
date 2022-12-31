class SiteController {
    // [GET] /
    index(reg, res) {
        return res.render('home');
    }

    // [GET] / search
    search(reg, res) {
        return res.render('search');
    }
}

module.exports = new SiteController();
