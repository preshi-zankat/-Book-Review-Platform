import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  genre: String,
  description: String,
  featured: { type: Boolean, default: false },
})

export default mongoose.model('Book', bookSchema)
