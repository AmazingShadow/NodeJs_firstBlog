class NewsController {

    // [GET] / news
    index(req, res) {
        return res.render('news');
    }

    // [GET] / show
    show(req, res) {
        res.send('Hello world!')
    }
}

module.exports = new NewsController();
