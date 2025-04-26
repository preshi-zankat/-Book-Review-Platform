import Book from '../models/Book.js'


export const getBooks = async (req, res) => {
  try {
    const books = await Book.find()
    res.json(books)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}

export const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id)
    if (!book) return res.status(404).json({ message: 'Book not found' })
    res.json(book)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}


export const createBook = async (req, res) => {
  try {
    const book = new Book(req.body)
    await book.save()
    res.status(201).json(book)
  } catch (err) {
    res.status(400).json({ message: err.message })
  }
}
