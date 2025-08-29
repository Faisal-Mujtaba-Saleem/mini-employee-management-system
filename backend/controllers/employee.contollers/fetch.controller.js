const { default: mongoose } = require("mongoose");
const Employee = require("../../models/employee.model");

const handleFetchEmployee = async (req, res) => {
    try {
        console.log("Fetching employee initiated");
        
        let query = {
            employeeId: req.query.id,
            phoneNumber: req.query.phoneNumber
        };

        if (!query._id && !query.phoneNumber) {
            res.status(400).json({ message: 'Please provide either id or phone number to search.' });
            return;
        }

        const employee = await Employee.findOne(query);
        console.log(employee);
        if (!employee) {
            res.status(404).json({ message: 'Employee not found.' });
            return;
        }

        res.status(200).json({ message: 'Employee fetched successfully.', employee });
        
        console.log("Employee fetch process completed successfully");
    } catch (error) {
        console.error('Error searching employee:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
}

module.exports = handleFetchEmployee;