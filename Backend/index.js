import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bookRoute from './routes/book.route.js'
import userRoute from './routes/user.route.js'
import cors from 'cors'

const app = express()

app.use(cors())

dotenv.config()

app.use(express.json())

app.get('/', (req, res)=>{
    res.send('working')
})


const connectDB = async () =>{
  try{
  await mongoose.connect('mongodb+srv://shravyakmp:VITPUNE@cluster0.i5abkat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
   console.log('connected')
}
catch(err){
   console.log(err)
}
}

connectDB()

//defining routes

app.use('/book', bookRoute)
app.use("/user", userRoute);






app.listen(4000, ()=>{
  console.log("working")
})