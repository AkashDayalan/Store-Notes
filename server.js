const express = require("express");
const fileUpload = require("express-fileupload");
const multer = require("multer");
const app = express();

app.use(fileUpload());

// This doesnt work yet

// We have to store the uploaded files in the uploads folder
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },

  filename: function (req, file, cb) {
    cb(
      null,
      file.fieldname + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

var upload = multer({ storage: storage });

app.post("/uploads", (req, res) => {
  console.log("Submitted");
});
//////////////////////////////////////////////////////////////


app.listen(5000, () => console.log("Server is running..."));