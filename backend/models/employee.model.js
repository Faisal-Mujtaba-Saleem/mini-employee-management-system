const { default: mongoose } = require("mongoose");

const EmployeeSchema = mongoose.Schema({
  companyName: {
    type: String,
    required: true,
  },
  address: {
    type: Object,
    required: true,
    properties: {
      city: {
        type: String,
        required: true,
      },
      locality: {
        type: String,
        required: true,
      },
    },
  },
  profilePhoto: {
    type: String,
    required: false,
    default: function () {
      const avatarName = this.name.split(" ").join("+");
      return `https://ui-avatars.com/api/?name=${avatarName}&background=random&size=128&rounded=true&bold=true&color=fff&font-size=0.5&avatar=${avatarName}`;
    }, // Placeholder URL
  },
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
  },
  role: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const Employee = mongoose.model("Employee", EmployeeSchema);
module.exports = Employee;
