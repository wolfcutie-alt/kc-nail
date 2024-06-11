const express = require('express');
const router = express.Router();
const {getBooking, getBookingById, createBooking, updateBooking, deleteBooking} = require("../../controllers/booking.controller");

router.get("/", getBooking);
router.get("/:id", getBookingById);
router.post("/", createBooking);
router.put("/:id", updateBooking);
router.delete("/:id", deleteBooking);

module.exports = router;