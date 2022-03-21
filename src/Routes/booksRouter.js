const express = require('express')
const router = express.Router();

const bookController = require('../Controllers/booksController')

router.route("/books")
    .get(bookController.getBooks)
    .post(bookController.postBook)

router.route("/books/:id")
    .get(bookController.getBook)
    .put(bookController.updateBook)
    .delete(bookController.deleteBook)

module.exports = router;