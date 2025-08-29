const express = require('express');

const router = express.Router();

const upload = require('../middlewares/upload.middleware');
const handleFileUpload = require('../controllers/employee.contollers/upload.controller');
const handleFetchEmployee = require('../controllers/employee.contollers/fetch.controller');
const handleFetchAllEmployees = require('../controllers/employee.contollers/fetchAllEmployees.controller');

// Route to handle file upload
router.post('/upload', upload.single('csv_file'), handleFileUpload);

// Route to handle fetch employee by id && phone number
router.get('/fetch', handleFetchEmployee);

// Route to get all employees
router.get('/fetch-all', handleFetchAllEmployees);

module.exports = router;