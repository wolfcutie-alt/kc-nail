const {booking:Booking} = require("../models");

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
        const { bookingid, customername, datebooking, bookingdescription} = req.body;
        const newBooking = await Booking.create({ bookingid, customername, datebooking, bookingdescription });
        res.status(201).json(newBooking);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateBooking = async (req, res) => {
    try {
        const { id } = req.params;
        const { customername, datebooking, bookingdescription } = req.body;

        const [updated] = await Booking.update({ customername, datebooking, bookingdescription }, {
            where: { bookingid : id }
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
            where: { bookingid: id }
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