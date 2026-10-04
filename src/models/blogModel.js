const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "title is required"],
    },

    description: {
      type: String,
      required: [true, "description is required"],
    },

    location: {
      type: String,
      required: [true, "location is required"],
    },

    country: {
      type: String,
      required: [true, "country is required"],
    },

    author: {
      type: String,
      required: [true, "author is required"],
    },

    travelDate: {
      type: Date,
      required: [true, "travelDate is required"],
    },

    category: {
      type: String,
      required: [true, "category is required"],
    },

    rating: {
      type: Number,
      required: [true, "rating is required"],
    },

    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  },
);

const Blog = mongoose.model("Blog", blogSchema);

module.exports = Blog;

// {
//   "title": "My Goa Trip",
//   "description": "I visited beautiful beaches in Goa.",
//   "location": "Goa",
//   "country": "India",
//   "author": "Krisha",
//   "travelDate": "2026-09-15",
//   "category": "Beach",
//   "rating": 5,
//   "image": "goa.jpg"
// }
