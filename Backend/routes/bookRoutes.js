import express from 'express'
import {
  getBooks,
  getBookById,
  createBook,
} from '../controllers/bookController.js'
import { protect } from '../middleware/authMiddleware.js'
import  {authorizeRoles } from '../middleware/authorizeRoles.js'

const router = express.Router()

router.get('/', getBooks)
router.get('/:id', getBookById)
router.post('/',protect,authorizeRoles('admin'), createBook)

export default router
