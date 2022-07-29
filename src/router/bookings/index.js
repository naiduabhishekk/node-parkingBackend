const express = require("express");
const { getRequest, bookingRequest } = require("../../controller/requestController");

var router = express.Router();


router.post("/create", async (req, res, next) => {
  const response = await bookingRequest(req.body)
    res.send(response);
  
  });


/* GET customers listing. */

router.get("/", async (req, res, next) => {
const response = await getRequest()
  res.send(response);

});
module.exports = router;


