const express = require("express");
const app = express();
const cors = require("cors");
const port = 8000;
const authorsRoutes = require("./server/routes/author.routes");
require("./server/config/moongose.config");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

authorsRoutes(app);

app.listen(port, () => console.log(`Listening at Port ${port}`));
