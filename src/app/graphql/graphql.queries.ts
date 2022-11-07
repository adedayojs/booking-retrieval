import { gql } from 'apollo-angular';

const GET_BOOKING = gql`
  query {
    allBookings {
      bookingCode
      contactDetails
      itinerary
      passengers
    }
  }
`;

const GET_BOOKING_Search = gql`
  query ($bookingFilter: BookingFilter) {
    allBookings(filter: $bookingFilter) {
      bookingCode
      passengers
    }
  }
`;

export { GET_BOOKING_Search, GET_BOOKING };
