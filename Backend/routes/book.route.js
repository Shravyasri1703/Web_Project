import express from 'express'
import { getBook } from '../Controller/Book.controler.js'
import Book from '../Models/book.model.js'

const router = express.Router()

router.post('/', async(req, res)=>{
    try{
          const newBook = {
            name : req.body.name,
            Price : req.body.Price,
            category: req.body.category,
            image : req.body.image,
            title: req.body.title
          }

          const book = await Book.create(newBook)

          res.status(200).send('added')
    }
    catch(err){
        console.log(err)
        res.status(500).send(err)
    }
})


router.get('/', getBook)


export default router
