"use server";

//This function takes in a booking ID and returns the booking details
export async function getBookingById(id: number) {
  const res = await fetch(
    `http://host.docker.internal:5000/api/bookings/${id}`,
    {
      cache: "no-store", //no-store means that the browser should not use the cache for the request
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

//This function returns all bookings
export async function getBookings() {
  const res = await fetch("http://host.docker.internal:5000/api/bookings", {
    cache: "no-store", //no-store means that the browser should not use the cache for the request
    mode: "no-cors", //no-cors means that the browser should not enforce CORS
  });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

//This function takes in booking data and creates a new booking
export async function createBooking(data: {
  service: string;
  name: string;
  start: string;
  end: string;
  date: string;
}) {
  const formattedData = {
    service: data.service,
    doctor_name: data.name,
    start_time: data.start,
    end_time: data.end,
    date: data.date,
  };

  const response = await fetch(
    "http://host.docker.internal:5000/api/bookings",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formattedData),
    }
  );

  if (!response.ok) {
    const error = await response.json();
    console.error("Error creating booking:", error);
    throw new Error("Failed to create booking");
  }
}
