import db from '../mock/db';

const BookingController = {
  findBookingByCodeAndName(code: string, lastName: string) {
    const bookings = db.filter(
      booking =>
        booking.bookingCode === code &&
        booking.passengers.lastName === lastName,
    );

    return bookings;
  },

  getAllBookings() {
    return db;
  },
};

export default BookingController;
