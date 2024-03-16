const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
  title: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
