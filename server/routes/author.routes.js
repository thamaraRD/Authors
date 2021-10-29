const {
  createAuthors,
  getAllAuthors,
  getOneAuthor,
  deletedAuthor,
  updateAuthor,
} = require("../controllers/author.controller");

module.exports = (app) => {
  app.post("/api/authors", createAuthors);
  app.get("/api/authors", getAllAuthors);
  app.get("/api/authors/:id", getOneAuthor);
  app.delete("/api/authors/delete/:id", deletedAuthor);
  app.put("/api/authors/update/:id", updateAuthor);
};
