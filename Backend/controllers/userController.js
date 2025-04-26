import User from '../models/User.js'
import generateToken from '../utils/generateToken.js'
import bcrypt from 'bcryptjs'

export const registerUser = async (req, res, next) => {
  try {
    const { name, email, password } = req.body
    const userExists = await User.findOne({ email })

    if (userExists) return res.status(400).json({ message: 'User already exists' })

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await User.create({ name, email, password: hashedPassword })

    res.cookie('jwt', generateToken(user._id), { httpOnly: true })

    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })
  } catch (error) {
    next(error)
  }
}

export const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {

      res.cookie('jwt', generateToken(user._id), { httpOnly: true })
      
      res.json({
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      })
    } else {
      res.status(401).json({ message: 'Invalid credentials' })
    }
  } catch (error) {
    next(error)
  }
}

export const getUserProfile = async (req, res, next) => {
  try {
    const user = await User.findById(req.user).select('-password')
    if (user) res.json(user)
    else res.status(404).json({ message: 'User not found' })
  } catch (error) {
    next(error)
  }
}
