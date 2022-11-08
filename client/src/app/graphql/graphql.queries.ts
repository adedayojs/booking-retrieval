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
  query ($bookingCode: String, $lastName: String) {
    allBookings(bookingCode: $bookingCode, lastName: $lastName) {
      bookingCode
      contactDetails {
        class
        address
      }
      itinerary {
        type
        connections {
          id
          duration
          origin {
            IATACode
            name 
            city {
              IATACode
              name 
              country {
                code
                name
              }
            }
          }
          destination{
            IATACode
            name 
            city {
              IATACode
              name 
              country {
                code
                name
              }
            }
          }
          segments{
            id
            type
            informational
            departFrom {
              IATACode
              name 
              city {
                IATACode
                name 
                country {
                  code
                  name
                }
              }
            }
            arriveOn {
              IATACode
              name 
              city {
                IATACode
                name 
                country {
                  code
                  name
                }
              }
            }

            marketingFlight {
              number
              numberOfStops
              carrier {
                code
                name
              }
              status {
                code
                name
              }
              sellingClass{
                code
              }
              operatingFlight {
                number
                carrier {
                  code
                  name
                }
                duration
                flown
                checkInStart
                localCheckInStart
                checkInEnd
                localCheckInEnd
                scheduledArrival
                localScheduledArrival
                scheduledDeparture
                localScheduledDeparture
                arrivalTerminal {
                  name
                }
                cabin {
                  code
                  name
                }
                equipment {
                  code
                  name
                }
              }

            }
            
          }
        }
      }
      passengers {
        id
        firstName
        lastName
        title {
          code
          name
        }
      }
    }
  }
`;

export { GET_BOOKING_Search, GET_BOOKING };
