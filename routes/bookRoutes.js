const express = require("express");
const router = express.Router();
const {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
} = require("../controllers/bookControllers");

// setting route to get all books
router.get("/",getAllBooks);

// setting route to get book by id 
router.get("/:bookId", getBookById)

// setting route to add book
router.post("/", addBook)

// setting route to update book
router.patch("/:bookId", updateBook)

//setting route to delete book
router.delete("/:bookId",deleteBook)

module.exports = router;
