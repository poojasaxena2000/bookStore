import mongoose from "mongoose";

// this is Schame of database

const bookSchema = mongoose.Schema({ 
    name:String,
    price:String,
    category:String,
    image:String,
    title:String
})


//  now this model of Schema


const Book = mongoose.model("Book", bookSchema);
export default Book