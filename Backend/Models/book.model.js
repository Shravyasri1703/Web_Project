import mongoose from "mongoose";

const Book_Schema = mongoose.Schema({
   name : String,
   Price : String,
   category: String,
   image : String,
   title: String
})

const Book = new mongoose.model('Book', Book_Schema)

export default Book