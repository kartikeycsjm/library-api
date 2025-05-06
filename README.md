# 📚 Library Management API

A backend API for a simple **Library Management System** built using **NestJS** and **MongoDB**, supporting full **CRUD operations** and **fuzzy search** on books. Deployed on **Vercel** with Swagger documentation for easy testing.

---

## 🔗 Hosted API

- 🚀 [Live API on Vercel](https://your-vercel-link.vercel.app)  
- 📘 [Swagger Docs](https://your-vercel-link.vercel.app/api)

---

## ✨ Features

- ✅ Create, Read, Update, Delete books
- 🔍 Case-insensitive fuzzy search (e.g., `"Pottr"` matches `"Harry Potter"`)
- 📄 Swagger UI for API documentation
- 🧱 MongoDB Atlas database
- 🌐 Deployed to Vercel
- 🛡️ Rate limiting and logging middleware (optional/bonus)

---

## 🛠️ Tech Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **Database**: [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
- **ODM**: [Mongoose](https://mongoosejs.com/)
- **Search**: [Fuse.js](https://fusejs.io/) (for fuzzy search)
- **Docs**: [Swagger](https://swagger.io/)

---

## 📦 Installation

```bash
git clone https://github.com/your-username/library-api.git
cd library-api
npm install
```

---

## 🔧 Environment Variables

Create a `.env` file in the root:

```
MONGODB_URI=your_mongodb_connection_string
```

You can get this from MongoDB Atlas. It should look like:

```
mongodb+srv://<username>:<password>@cluster.mongodb.net/<dbname>?retryWrites=true&w=majority
```

---

## 🚀 Running Locally

```bash
npm run start:dev
```

---

## 📚 API Endpoints

| Method | Endpoint         | Description                |
|--------|------------------|----------------------------|
| POST   | `/books`         | Add a new book             |
| GET    | `/books`         | Get paginated list of books|
| GET    | `/books/:id`     | Get book by ID             |
| PUT    | `/books/:id`     | Update book by ID          |
| DELETE | `/books/:id`     | Delete book by ID          |
| GET    | `/search?query=` | Fuzzy search on title, author, genre |

> 🔎 Search is case-insensitive and tolerant to typos using Fuse.js.

---

## 📑 Swagger Docs

Swagger is available at:

```
GET /api
```

You can try out all endpoints directly from the browser.

---

## 🧪 Example Book Data

```json
{
  "title": "Harry Potter and the Sorcerer's Stone",
  "author": "J.K. Rowling",
  "genre": "Fantasy",
  "publishedYear": 1997,
  "isbn": "9780439708180",
  "stockCount": 10
}
```

---

## 📁 Project Structure

```
src/
├── books/
│   ├── books.controller.ts
│   ├── books.service.ts
│   ├── book.model.ts
│   ├── dto/
│   └── ...
├── app.module.ts
├── main.ts
```

---

## 🛡️ Optional Features (Bonus)

- ✅ **Request Logger Middleware** – logs method, URL, timestamp
- ✅ **Rate Limiting** – basic protection against abuse

---

## 📝 License

This project is licensed for submission to **Forescribe** hiring process only.

---

## 🙌 Author

**Kartikey**  
Built with 💻 and ❤️ using NestJS