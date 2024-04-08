import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    imgUrl: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        unique: false,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    sex: {
        type: String,
    },
    desc: {
        type: String,
    },
    idiomvalue: {
        type: String,
        default: 'spanish',
    },
    adminvalue: {
        type: String,
        default: 'googledrive',
    },
    selectedClothing: {
        type: [],
    },
    
},{timestamps:true})

const Book = mongoose.models.Book || mongoose.model("Book", BookSchema);

export default Book;