const Book = require("../models/Book");

// Get all books
async function getAllBooks(req, res) {
  try {
    const bookList = await Book.find();
    res.json(bookList);
  } catch (error) {
    console.error("Error retrieving books:", error.message);
    res.status(500).json({ error: "An error occurred while retrieving books" });
  }
}

// Get a book by ID
async function getBookById(req, res) {
  try {
    const bookId = req.params.id;
    const book = await Book.findById(bookId);
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error("Error retrieving book:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the book" });
  }
}

// Add a new book
async function addBook(req, res) {
  try {
    const { title, author, isbn } = req.body;
    const newBook = await Book.create({ title, author, isbn });
    res.status(201).json(newBook);
  } catch (error) {
    console.error("Error adding a book:", error.message);
    res.status(500).json({ error: "An error occurred while adding the book" });
  }
}

// Update a book
async function updateBook(req, res) {
  try {
    const bookId = req.params.id;
    const { title, author, isbn } = req.body;
    const updatedBook = await Book.findByIdAndUpdate(
      bookId,
      { title, author, isbn },
      { new: true }
    );
    if (updatedBook) {
      res.json(updatedBook);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error("Error updating a book:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while updating the book" });
  }
}

// Delete a book
async function deleteBook(req, res) {
  try {
    const bookId = req.params.id;
    const deletedBook = await Book.findByIdAndRemove(bookId);
    if (deletedBook) {
      res.json(deletedBook);
    } else {
      res.status(404).json({ error: "Book not found" });
    }
  } catch (error) {
    console.error("Error deleting a book:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the book" });
  }
}

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook,
};
