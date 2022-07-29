const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://testuser:temppassword@cluster0.ycvge9z.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

  async function run() {
    // Create a new connection and connect to MongoDB...
    const conn = await mongoose.connect('mongodb+srv://testuser:temppassword@cluster0.ycvge9z.mongodb.net/?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
  
    // But register a model on Mongoose's default connection
  }
  
  
  run();

const EmployeeSchema = new mongoose.Schema({
  empName: {
    type: String,
    required: false,
  },
  empEmail: {
    type: String,
    required: false,
  },
  empPassword: {
    type: String,
    required: false,
  },});

  const BookingSchema = new mongoose.Schema({
        empID: {
            type: String,
            required: false,
        },
        empVehicleType: {
            type: String,
            required: false,
        },
        empVehicleNumber: {
            type: String,
            required: false,
        },
        empVehicleDescription: {
            type: String,
            required: false,
        },
        empRequestStart: {
            type: String,
            required: false,
        },
        empRequestEnd: {
            type: String,
            required: false,
        },
});

const employee = mongoose.model('employee',EmployeeSchema)
const Booking = mongoose.model('Booking',BookingSchema)
module.exports = { employee, Booking }