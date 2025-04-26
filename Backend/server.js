import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import bookRoutes from './routes/bookRoutes.js'
import reviewRoutes from './routes/reviewRoutes.js'
import userRoutes from './routes/userRoutes.js'

dotenv.config()
connectDB()

const app = express()
app.use(cors())
app.use(express.json())

const allowedOrigins = ['http://localhost:5173']; 

const corsOptions = {
  origin: function (origin, callback) {
    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET, POST, PUT, DELETE', 
  credentials: true, 
};

// Enable CORS
app.use(cors(corsOptions));


app.use('/api/books', bookRoutes)
app.use('/api/reviews', reviewRoutes)
app.use('/api/users', userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
