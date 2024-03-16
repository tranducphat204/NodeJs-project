const Review = require("../models/Review");

// Get a review by ID
async function getReviewById(req, res) {
  try {
    const reviewId = req.params.id;
    const review = await Review.findById(reviewId);
    if (review) {
      res.json(review);
    } else {
      res.status(404).json({ error: "Review not found" });
    }
  } catch (error) {
    console.error("Error retrieving review:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while retrieving the review" });
  }
}

// Add a new review
async function addReview(req, res) {
  try {
    const { bookId, title, rating, comment } = req.body;
    const newReview = await Review.create({ bookId, title, rating, comment });
    res.status(201).json(newReview);
  } catch (error) {
    console.error("Error adding a review:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while adding the review" });
  }
}

// Update a review
async function updateReview(req, res) {
  try {
    const reviewId = req.params.id;
    const { title, rating, comment } = req.body;
    const updatedReview = await Review.findByIdAndUpdate(
      reviewId,
      { title, rating, comment },
      { new: true }
    );
    if (updatedReview) {
      res.json(updatedReview);
    } else {
      res.status(404).json({ error: "Review not found" });
    }
  } catch (error) {
    console.error("Error updating a review:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while updating the review" });
  }
}

// Delete a review
async function deleteReview(req, res) {
  try {
    const reviewId = req.params.id;
    const deletedReview = await Review.findByIdAndRemove(reviewId);
    if (deletedReview) {
      res.json(deletedReview);
    } else {
      res.status(404).json({ error: "Review not found" });
    }
  } catch (error) {
    console.error("Error deleting a review:", error.message);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the review" });
  }
}

module.exports = {
  getReviewById,
  addReview,
  updateReview,
  deleteReview,
};
