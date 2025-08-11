# Employee Management System – Backend

This backend service is built with Node.js, Express, and MongoDB. It provides APIs for bulk employee data upload via CSV and flexible employee search.

## Features

- Upload employee data using CSV files
- Search for employees by ID or phone number
- Mongoose-based employee data model

## Project Structure

```
backend/
│
├── app.js                  # Main application entry point
├── employees.csv           # Sample employee data (CSV)
├── files.json              # File metadata (if used)
├── package.json            # Project dependencies and scripts
│
├── config/
│   └── db.config.js        # MongoDB connection configuration
│
├── controllers/
│   └── employee.contollers/
│       ├── fetch.controller.js   # Fetch employee logic
│       └── upload.controller.js  # CSV upload logic
│
├── middlewares/
│   └── upload.middleware.js      # Middleware for file uploads
│
├── models/
│   └── employee.model.js         # Mongoose schema for employees
│
└── routes/
    └── employee.routes.js        # API routes for employee operations
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- MongoDB

### Installation

1. Clone the repository:
   ```sh
   git clone <repo-url>
   cd employee-management-system/backend
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Configure MongoDB connection in `config/db.config.js`.

### Running the Server

```sh
node app.js
```

The server will start on the configured port (default: 3000).

## API Endpoints

- `POST /api/employee/upload` – Upload employee data via CSV file (field name: `csv_file`)
- `GET /api/employee/fetch` – Search for employees by ID or phone number (provide query parameters)

> **Note:** Endpoints for creating, updating, or deleting individual employees are not implemented.

## CSV Format

The CSV should have the following columns:

```
companyName,address_city,address_locality,profilePhoto,name,position,phoneNumber,email,role,updatedAt
```

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## License

MIT
