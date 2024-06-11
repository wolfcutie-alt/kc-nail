// backend/src/routes/bookingRoutes.js
const express = require('express');
const { createBooking, getBookingById, getBooking, updateBooking, deleteBooking } = require('../controllers/bookingController');

const router = express.Router();

router.get('/bookings', getBooking);
router.post('/bookings', createBooking);
router.get('/bookings/:id', getBookingById);
router.put('/bookings/:id', updateBooking);
router.delete('/bookings/:id', deleteBooking);

module.exports = router;