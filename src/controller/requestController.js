const { request } = require("express");
const Booking = require("../model/employeeModel").Booking


const getRequest = async(req, res) => {
  return Booking.find()
    // console.log("executing booking.find")
    //  Booking.find({},(err,data) => {
    //   if(err){
    //     console.log("Get request working fine!")
    //     reject()
    //   }
    //   else{
    //     resolve(data)
    //     console.log("Getrequest failed")
    //   }
    //  })
  // })
};


//Registration Method
const bookingRequest = (body) => {
  const newBooking = new Booking({
    empID: body.empID,
    empVehicleType: body.empVehicleType,
    empVehicleNumber: body.empVehicleNumber,
    empVehicleDescription: body.empVehicleDescription,
    empRequestStart: body.empRequestStart,
    empRequestEnd: body.empRequestEnd,
  });
  return newBooking.save();
}

// //Parking request method
// const parkingRequest = (req, res) => {
//     const request = new Request({
//         empName: req.body.empName,
//         empEmail: req.body.empEmail,
//         empPassword: req.body.empPassword,
//         empConfirmPassword: req.body.empConfirmPassword,
//         empID: req.body.empID,
//         empVehicleType: req.body.empVehicleType,
//         empVehicleNumber: req.body.empVehicleNumber,
//         empVehicleDescription: req.body.empVehicleDescription,
//         empRequestStart: req.body.empRequestStart,
//         empRequestEnd: req.body.empRequestEnd,
//     });
//     request.save((err, request) => {
//         if (err){
//             res.send(err)
//         }
//         res.send(request)
//     });
// }

//Get da

module.exports = { bookingRequest, getRequest };
