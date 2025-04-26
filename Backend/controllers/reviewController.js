import Review from '../models/Review.js'


export const getReviewsByBook = async (req, res) => {
  try {    
    const reviews = await Review.find({ bookId: req.query.bookId })
    res.json(reviews)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
}


export const createReview = async (req, res) => {
  try {
    const review = new Review({
      ...req.body,
      userId: req.user._id, 
    });
    await review.save();
    res.status(201).json(review);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
