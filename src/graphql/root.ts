import BookingsResolver from '../resolvers/bookings';

export const root = {
  allBookings: BookingsResolver.AllBookings,
};
