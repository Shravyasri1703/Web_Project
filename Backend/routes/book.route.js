import express from 'express'
import { getBook } from '../Controller/Book.controler.js'

const router = express.Router()

router.get('/', getBook)

export default router
