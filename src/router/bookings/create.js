const express = require("express");
const { bookingRequest } = require("../../controller/requestController");

var router = express.Router();





/* GET customers listing. */

router.post("/create", async (req, res, next) => {
const response = await bookingRequest(req.body)
  res.send(response);

});
module.exports = router;