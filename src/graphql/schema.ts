import { buildSchema } from 'graphql';

//TODO: This schema could be better created to utilize interfaces

const schema = buildSchema(`
  type Query {
    allBookings (bookingCode: String, lastName: String): [Booking]
  }
  type Booking {
      bookingCode: String
      contactDetails: [ContactDetail]
      itinerary : Itinerary
      passengers: Passengers
  }

  type ContactDetail {
    class: String
    address: String
  }

  type Itinerary {
    type: String
    connections : [Connection]
  }

  type Connection {
    id:Int
    duration : String
    origin : Location
    destination : Location
    segments: [Segment]
  }

  type Location{
    IATACode: String
    name : String
    city : City
  }

  type City {
    IATACode: String
    name : String
    country : CodeName
  }

  type CodeName {
    code : String
    name : String
  }

  type Segment{
    id : Int
    type : String
    informational : Boolean
    departFrom : Location
    arriveOn : Location
    marketingFlight : MarketingFlight
  }

  type MarketingFlight{
    number : Int
    carrier : CodeName
    status : CodeName
    numberOfStops : Int
    sellingClass : Code
    operatingFlight : OperatingFlight
  }

  type Code {
    code : String
  }

  type OperatingFlight {
    number: String
    carrier : CodeName
    duration: String
    flown: Boolean
    checkInStart : String
    localCheckInStart : String
    checkInEnd : String
    localCheckInEnd : String
    scheduledArrival : String
    localScheduledArrival : String
    scheduledDeparture : String
    localScheduledDeparture : String
    arrivalTerminal : ArrivalTerminal
    cabin : CodeName
    equipment : CodeName
  }
  
  type ArrivalTerminal {
    name : String
  }

  type Passengers {
    id : Int
    firstName : String
    lastName : String
    title : CodeName
  }
`);

export default schema;
