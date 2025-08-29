const { default: mongoose } = require("mongoose");
const Employee = require("../../models/employee.model");

const handleFetchAllEmployees = async (req, res) => {
    try {
        console.log("Fetching employees initiated");

        const employees = await Employee.find({});
        console.log(employees);
        if (!employees) {
            res.status(404).json({ message: 'Employees not found.' });
            return;
        }

        res.status(200).json({ message: 'Employees fetched successfully.', employees });
        
        console.log("Employees fetch process completed successfully");
    } catch (error) {
        console.error('Error searching employees:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
}

module.exports = handleFetchAllEmployees;