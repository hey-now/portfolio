module.exports = {
    about
}

function about(req, res) {
    res.render('portfolio/about', { title: 'Meet the Developer' });
}