const express = require('express');

const router = express.Router();

const upload = require('../middlewares/upload.middleware');
const handleFileUpload = require('../controllers/employee.contollers/upload.controller');
const handleFetchEmployee = require('../controllers/employee.contollers/fetch.controller');

// Route to handle file upload
router.post('/upload', upload.single('csv_file'), handleFileUpload);

// Route to handle search employee by id && phone number
router.get('/fetch', handleFetchEmployee);

module.exports = router;