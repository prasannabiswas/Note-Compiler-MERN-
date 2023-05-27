const mongoose = require("mongoose");

const noteSchema = new mongoose.Schema({
    _id: Number,
    title: String,
    content: String,
    category: String
});

const Note = mongoose.model("Note",noteSchema);

export default Note;