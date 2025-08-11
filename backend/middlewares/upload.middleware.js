const e = require("express");
const multer = require("multer");

// Configure Multer to store files in memory
const storage = multer.memoryStorage();
const upload = multer({ storage });

module.exports = upload;