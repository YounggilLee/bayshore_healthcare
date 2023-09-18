/*This page is to set up routers.
 @author       Younggil, Lee(iamleeyounggil@gmail.com)
 @date         2023/09 created.
*/

const express = require('express');
const router = express.Router();
const createError = require('http-errors');

const bookController = require('../controllers/Book')

router.get('/', function(req, res, next) {    
    res.send('Hello, bayshore_healthcare API server....')
});

router.route('/books')
    .post(bookController.addBook)
    .get(bookController.listAllBooks)

router.route('/books/search')
    .get(bookController.searchBooks)

router.route('/books/:_id')      
    .put(bookController.updateBookDetails)
    .delete(bookController.removeBook)   
    .get(bookController.viewBookDetails)  

router.all('*', function (req, res, next) {
  next(createError(404, 'API is not existed!'))
});

module.exports = router;
