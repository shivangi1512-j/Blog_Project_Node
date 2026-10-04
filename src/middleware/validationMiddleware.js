const validationMiddleware = (req, res, next) => {
  const {
    title,
    description,
    location,
    country,
    author,
    travelDate,
    category,
    rating,
  } = req.body;

  if (
    !title ||
    !description ||
    !location ||
    !country ||
    !author ||
    !travelDate ||
    !category ||
    !rating
  ) {
    return res
      .status(400)
      .json({ message: "All required fields are required" });
  }

  next();
};

module.exports = validationMiddleware;
