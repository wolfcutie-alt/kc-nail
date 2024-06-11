const User = require("../models/bookingModel");

const getBooking = (req, res) => {
    pool.query('SELECT * FROM booking ORDER BY bookingID ASC', (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}

const getBookingById = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('SELECT * FROM booking WHERE bookingID = $1', [id], (error, results) => {
        if (error) {
            throw error;
        }
        res.status(200).json(results.rows);
    });
}

const createBooking = async (req, res) => {
    try {
        const {bookingID, customerName, dateBooking, bookingDescription} = req.body;
        const newBooking = await Booking.create({ bookingID, customerName, dateBooking, bookingDescription });
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateBooking = async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const {customername, datebooking, bookingdescription} = req.body;

        
    }
}

const deleteBooking = (req, res) => {
    const id = parseInt(req.params.id);

    pool.query('DELETE FROM booking WHERE bookingID = $1', [id], (error, result) => {
        if (error) {
            throw error;
        }
        res.status(200).send(`Booking deleted with ID: ${id}`);
    });
}

module.exports = {
    getBooking,
    getBookingById,
    createBooking,
    updateBooking,
    deleteBooking
}