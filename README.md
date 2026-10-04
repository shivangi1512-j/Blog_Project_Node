# Travel Blog API

A backend REST API for creating and managing travel blogs using **Node.js, Express.js, and MongoDB**.

## Project Overview

The Travel Blog API allows users to create, view, update, and delete travel blog posts. Each blog contains information such as title, description, location, country, author, travel date, category, rating, and image.

This project follows a simple **MVC (Model-View-Controller)** structure and uses MongoDB for storing blog data.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- Dotenv
- Postman

## Features

- Create a new travel blog
- Get all blogs
- Get a single blog by ID
- Update a blog
- Delete a blog
- MongoDB database integration
- Request validation
- Error handling
- REST API structure

## Project Structure

```text
BLog_Projects/
│
├── src/
│   ├── config/
│   │   └── database.js
│   │
│   ├── controllers/
│   │   └── blogController.js
│   │
│   ├── models/
│   │   └── blogModel.js
│   │
│   ├── routes/
│   │   └── blogRoutes.js
│   │
│   ├── middleware/
│   │   ├── errorMiddleware.js
│   │   └── validationMiddleware.js
│   │
│   └── server.js
│
├── .env
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

## Blog Fields

Each blog contains the following fields:

- `title` - Blog title
- `description` - Blog description
- `location` - Travel location
- `country` - Country name
- `author` - Blog author
- `travelDate` - Date of travel
- `category` - Travel category
- `rating` - Blog rating
- `image` - Image URL

## API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | `/api/blogs`     | Create a new blog |
| GET    | `/api/blogs`     | Get all blogs     |
| GET    | `/api/blogs/:id` | Get blog by ID    |
| PUT    | `/api/blogs/:id` | Update a blog     |
| DELETE | `/api/blogs/:id` | Delete a blog     |

## Example Blog

```json
{
  "title": "My Goa Trip",
  "description": "I visited beautiful beaches in Goa.",
  "location": "Goa",
  "country": "India",
  "author": "Shivangi",
  "travelDate": "2026-09-15",
  "category": "Beach",
  "rating": 5,
  "image": "https://example.com/goa.jpg"
}
```

## Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5050
MONGO_URI=your_mongodb_connection_string
```

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Run the Project

Start the server using:

```bash
npm run start
```

The server will run on:

```text
http://localhost:5050
```

## API Testing

The APIs can be tested using **Postman**.

Example:

```text
POST http://localhost:5050/api/blogs
```

Select:

```text
Body → raw → JSON
```

and send the blog data.

## Project Video

### 🎥 Project Explanation Video

[Click here to watch the project explanation video](https://drive.google.com/file/d/1gbOPUrmJ9WcAyGunDSYxd7Wdy-RFri9Y/view?usp=sharing)
