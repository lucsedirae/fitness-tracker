const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 4040;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

require("./routes/api.js")(app);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
