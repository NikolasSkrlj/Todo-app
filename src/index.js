const express = require("express");
require("./db/mongoose.js");
const cors = require("cors");
const taskRouter = require("./routes/tasks");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRouter);

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log("Server is running on port ", port);
});
