
/*This page is to set up model for mongodb.
 @author       Younggil, Lee(iamleeyounggil@gmail.com)
 @date         2023/09 created.
*/
const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    default: ''
  },  
  author: {
    type: String,
    default: ''
  },
  publicationdate: {
    type: String,
    default: ''
  },
  quantity: {
    type: Number,
    default: 0
  } 
})

const Book = mongoose.model('Book', bookSchema)

module.exports = { Book }