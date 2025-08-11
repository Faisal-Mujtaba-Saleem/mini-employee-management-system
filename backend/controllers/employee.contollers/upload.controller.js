const xlsx = require("xlsx");
const flat = require("flat");
const Employee = require("../../models/employee.model");

const handleFileUpload = async (req, res) => {
  try {
    // Log the initiation of file upload
    console.log("File uploading initiated");

    // Check if file is provided
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    // Read the uploaded file and parse it
    const workbook = xlsx.read(req.file.buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const sheet = workbook.Sheets[sheetName];
    const raw_employees = xlsx.utils.sheet_to_json(sheet);

    if (raw_employees.length === 0) {
      return res.status(400).json({ message: "No data found in the file" });
    }

    // nesting the employee data
    const nested_employess = raw_employees.map((emp) => flat.unflatten(emp));

    // Save the file document to the database
    const insertedEmployees = await Employee.insertMany(nested_employess);

    // Return the response
    res.status(200).json({
      message: "File uploaded and data saved successfully",
      data: insertedEmployees,
    });

    // Log the success message
    console.log("File upload process completed successfully");
  } catch (err) {
    // Log the error message
    console.error("Error during file upload:", err);
    // Return the error response
    res.status(500).json({ error: err.message });
  }
};

module.exports = handleFileUpload;
