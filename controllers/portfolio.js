module.exports = {
    about,
    projects,
    contact
}

function about(req, res) {
    res.render('portfolio/about', { title: 'Meet the Developer' });
}
function projects(req, res) {
    res.render('portfolio/projects', { title: 'My Work' });
}
function contact(req, res) {
    res.render('portfolio/contact', { title: 'Contact Me!' });
}