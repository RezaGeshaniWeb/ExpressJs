class BlogController {
    getBlogs(req, res, next) {
        res.send('Blogs')
    }
    createNewBlog(req, res, next) {
        res.send('create new Blog')
    }
    deleteBlog(req, res, next) {
        res.send(`delete Blog with id # ${req.params.id}`)
    }
    updateBlog(req, res, next) {
        res.send(`update Blog with id # ${req.params.id}`)
    }
}

module.exports = BlogController