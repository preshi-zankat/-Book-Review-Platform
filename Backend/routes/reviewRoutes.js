import express from 'express'
import {
  getReviewsByBook,
  createReview,
} from '../controllers/reviewController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.get('/',protect, getReviewsByBook)
router.post('/',protect, createReview)

export default router
