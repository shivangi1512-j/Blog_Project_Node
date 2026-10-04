const express = require("express");

const {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

const validationMiddleware = require("../middleware/validationMiddleware");

const router = express.Router();

router.post("/", createBlog);
router.get("/", getBlogs);
router.get("/:id", getBlogById);
router.put("/:id", validationMiddleware, updateBlog);
router.delete("/:id", deleteBlog);

module.exports = router;
