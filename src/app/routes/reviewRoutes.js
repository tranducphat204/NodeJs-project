const express = require("express");
const reviewController = require("../controllers/reviewController");

const router = express.Router();

router.get("/:id", reviewController.getReviewById);
router.post("/", reviewController.addReview);
router.put("/:id", reviewController.updateReview);
router.delete("/:id", reviewController.deleteReview);

module.exports = router;
