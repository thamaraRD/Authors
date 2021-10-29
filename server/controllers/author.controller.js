const Authors = require("../models/authors.model");

module.exports.createAuthors = (req, res) => {
  const { body } = req;
  console.log(body);
  Authors.create(body)
    .then((authors) => res.json({ authors }))
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: err });
    });
};
module.exports.getAllAuthors = async (req, res) => {
  try {
    const authors = await Authors.find();
    return res.json({ authors });
  } catch (error) {
    return res.status(500).json({ error: err });
  }
};
module.exports.getOneAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const author = await Author.findById(id);
    return res.json({ author });
  } catch (error) {
    return res.status(500).json({ error: err });
  }
};
module.exports.deletedAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteAuthor = await Author.deleteOne({ _id: id });
    return res.json({
      message: "Se ha borrado producto exitosamente",
      author: deleteAuthor,
    });
  } catch (error) {
    return res.status(500).json({ error: err });
  }
};
module.exports.updateAuthor = async (req, res) => {
  try {
    const { id } = req.params;
    const { body } = req;
    const updateTheAuthor = await Author.findOneAndUpdate({ _id: id }, body, {
      new: true,
    });
    return res.json({
      message: "Se actualizó el producto correctamente",
      updateTheAuthor,
    });
  } catch (error) {
    return res.status(500).json({ error: err });
  }
};
