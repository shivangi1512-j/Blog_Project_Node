const Blog = require("../models/blogModel");

const createBlog = async (req, res) => {
  try {
    const blog = await Blog.create(req.body);

    res.status(201).json({ message: "Blog created successfully", data: blog });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to create blog", error: error.message });
  }
};

const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res
      .status(200)
      .json({ message: "Blogs fetched successfully", data: blogs });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch blogs", error: error.message });
  }
};

const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog fetched successfully", data: blog });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch blog", error: error.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog updated successfully", data: blog });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to update blog", error: error.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);

    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }

    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete blog", error: error.message });
  }
};

module.exports = { createBlog, getBlogs, getBlogById, updateBlog, deleteBlog };
