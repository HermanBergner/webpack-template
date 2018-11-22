import express from 'express'
import www from './routes/public'

const router = express.Router()
router.use(www)

export default router

