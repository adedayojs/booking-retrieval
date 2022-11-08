export interface IBooking {
  bookingCode: string;
  contactDetails: [
    {
      '@class': string;
      address: string;
    }
  ];
  itinerary: {
    type: string;
    connections: IConnection[];
  };
  passengers: IPassenger;
}

interface IPassenger {
  id: number;
  firstName: string;
  lastName: string;
  title: {
    code: string;
    name: string;
  };
}

interface IConnection {
  id: number;
  duration: string;
  origin: {
    IATACode: string;
    name: string;
    city: {
      IATACode: string;
      name: string;
      country: {
        code: string;
        name: string;
      };
    };
  };
  destination: {
    IATACode: string;
    name: string;
    city: {
      IATACode: string;
      name: string;
      country: {
        code: string;
        name: string;
      };
    };
  };
  segments: ISegment[];
}

interface ISegment {
  id: number;
  type: string;
  informational: false;
  departFrom: {
    IATACode: string;
    name: string;
    city: {
      IATACode: string;
      name: string;
      country: {
        code: string;
        name: string;
      };
    };
  };
  arriveOn: {
    IATACode: string;
    name: string;
    city: {
      IATACode: string;
      name: string;
      country: {
        code: string;
        name: string;
      };
    };
  };
  marketingFlight: {
    number: string;
    carrier: {
      code: string;
      name: string;
    };
    status: {
      code: string;
      name: string;
    };
    numberOfStops: number;
    sellingClass: {
      code: string;
    };
    operatingFlight: {
      number: string;
      carrier: {
        code: string;
        name: string;
      };
      duration: string;
      flown: false;
      checkInStart: string;
      localCheckInStart: string;
      checkInEnd: string;
      localCheckInEnd: string;
      scheduledArrival: string;
      localScheduledArrival: string;
      scheduledDeparture: string;
      localScheduledDeparture: string;
      arrivalTerminal: {
        name: string;
      };
      cabin: {
        code: string;
        name: string;
      };
      equipment: {
        code: string;
        name: string;
      };
    };
  };
}
