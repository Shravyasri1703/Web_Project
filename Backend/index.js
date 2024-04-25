import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './routes/book.route.js'

const app = express()

dotenv.config()

app.get('/', (req, res)=>{
    res.send('working')
})

const url = 'mongodb+srv://shravyasrishravyasri21:webtechno@cluster0.ji5rpld.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const connectDB = async () =>{
  try{
  await mongoose.connect(url)
   console.log('connected')
}
catch(err){
   console.log(err)
}
}

connectDB()

//defining routes

app.use('/', bookRoute)






app.listen(4000, ()=>{
  console.log("working")
})