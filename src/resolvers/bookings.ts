import BookingController from '../controllers/booking';

const BookingResolver = {
  async AllBookings(args: any) {
    try {
      const { lastName, bookingCode } = args;
      let bookings: any[];
      if (lastName && bookingCode) {
        bookings = await BookingController.findBookingByCodeAndName(
          bookingCode,
          lastName,
        );
        return bookings;
      }

      bookings = await BookingController.getAllBookings();

      return bookings;
    } catch (error) {
        // This would be better handled by creating a graphql error object and returning it
      return { error: true };
    }
  },
};

export default BookingResolver;
