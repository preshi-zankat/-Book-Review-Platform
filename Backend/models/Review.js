import mongoose from 'mongoose'

const reviewSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  content: String,
  rating: { type: Number, min: 1, max: 5 },
  date: { type: Date, default: Date.now },
})

export default mongoose.model('Review', reviewSchema)
