export const getBookings = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/bookings`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const bookings = await response.json();
        return bookings;
    } catch (error) {
        console.error('Failed to fetch bookings:', error);
        throw error;
    }
}

export const getBookingById = async (id) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/bookings/${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const booking = await response.json();
        return booking;
    } catch (error) {
        console.error(`Failed to fetch booking with id ${id}:`, error);
        throw error;
    }
}

export const createBooking = async (booking) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/bookings`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const newBooking = await response.json();
        return newBooking;
    } catch (error) {
        console.error('Failed to create booking:', error);
        throw error;
    }
}

export const updateBooking = async (id, booking) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/bookings/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(booking)
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const updatedBooking = await response.json();
        return updatedBooking;
    } catch (error) {
        console.error(`Failed to update booking with id ${id}:`, error);
        throw error;
    }
}

export const deleteBooking = async (id) => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/bookings/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.status;
    } catch (error) {
        console.error(`Failed to delete booking with id ${id}:`, error);
        throw error;
    }
}
