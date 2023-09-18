/*This page is to handle API requests.
 @author       Younggil, Lee(iamleeyounggil@gmail.com)
 @date         2023/09 created.
*/

const { Book } = require('../../models')

async function addBook(req, res) {  
  try {
    const checkTitle = await Book.findOne({title: req.body.title})
    if(checkTitle){
       return res.send({
         success: false,
         msg : 'book is already existed'
       })
    }
    else{
      let { title, author, publicationdate, quantity } = req.body
      const book = await Book.create({title, author, publicationdate, quantity })
     res.send({
       success: true,
       msg: 'added new Book'
     })
    }
  }catch (e) {
    console.log(e.message)
  }
}  

async function listAllBooks(req, res) {
  try{
      const books = await Book.find({})
      res.send({ success: true, msg: 'found successfully', book: books})
  } catch (e) {
    console.log(e.message)
  }   
}

async function updateBookDetails(req, res) {  
    const _id = req.params._id
    try { 
          const book = await Book.findByIdAndUpdate({ _id }, 
            {$set: req.body})
          if (!book) {
           return res.send({ success: false, msg: 'the book is not existed!' })
          } 
          const updatedBook = await Book.findById({_id})
          res.send({ success: true, msg: 'modified successfully', book: updatedBook})
    
      } catch (e) {
         res.send({ success: false, msg: e.message })
      }
}

async function removeBook(req, res) {  
  const _id = req.params._id
  try{
    const book = await  Book.deleteOne({ _id })
    if (!book) {
       return res.send({ success: false, msg: 'the book is not existed!' })
      } 
    res.send({ success: true, msg: 'deleted successfully'})
  } catch (e) {
     res.send({ success: false, msg: e.message })
  }
}

async function viewBookDetails(req, res) {  
  const _id = req.params._id
  try{
    const book = await  Book.findById({ _id })
    if (!book) {
       return res.send({ success: false, msg: 'the book is not existed!' })
      } 
    res.send({ success: true, msg: 'found the book successfully', book: book})
  } catch (e) {
     res.send({ success: false, msg: e.message })
  }
}

async function searchBooks(req, res) {   
  const criteria = req.query.criteria
  const keyword = req.query.keyword
  const condition = {
    [criteria]:keyword
  }
  try{
    const book = await  Book.find(condition)
    if (!book) {
       return res.send({ success: false, msg: 'the book is not existed!' })
      } 
    res.send({ success: true, msg: 'found the book successfully', book: book})
  } catch (e) {
     res.send({ success: false, msg: e.message })
  }
}

module.exports = {
  addBook,
  listAllBooks,
  updateBookDetails,
  removeBook,
  viewBookDetails,
  searchBooks
}