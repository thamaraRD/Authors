const {
  createAuthors,
  getAllAuthors,
  getOneAuthor,
  deleteAuthor,
  updateAuthor,
} = require("../controllers/author.controller");

module.exports = (app) => {
  app.post("/api/authors", createAuthors);
  app.get("/api/authors", getAllAuthors);
  app.get("/api/authors/:id", getOneAuthor);
  app.delete("/api/authors/delete/:id", deleteAuthor);
  app.put("/api/authors/update/:id", updateAuthor);
};
