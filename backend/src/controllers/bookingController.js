const Booking = require("../models/bookingModel");

const getBooking = async (req, res) => {
    try {
        const booking = await Booking.findAll();
        res.status(200).json(booking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getBookingById = async (req, res) => {
    try {
        const { id } = req.params;
        const booking = await Booking.findByPk(id);
        if (booking) {
            res.status(200).json(booking);
        } else {
            res.status(404).json({ error: 'Booking not found' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
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
        const {customerName, dateBooking, bookingDescription} = req.body;

        const [updated] = await Booking.update({ customerName, dateBooking, bookingDescription }, {
            where: { id }
        });
        if (updated) {
            const updatedBooking = await Booking.findByPk(id);
            return res.status(200).json(updatedBooking);
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Booking.destroy({
            where: { id }
        });

        if (deleted) {
            res.status(204).send("Booking deleted");
        } else {
            res.status(404).json({ error: 'Booking not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    getBooking,
    getBookingById,
    createBooking,
    updateBooking,
    deleteBooking
}