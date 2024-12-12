import { readableDate } from "@/utils/readable-date";
import { Appointment } from "@/types/interface";
import { getBookings } from "./actions/actions";

const Home: React.FC = async () => {
  const bookings: Appointment[] = await getBookings();

  return (
    <div className="px-4 min-h-screen">
      <div className="max-w-[1200px] mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6 text-blue-800 py-4">
          Your Bookings
        </h1>
        <ul>
          {bookings.map((booking: Appointment) => (
            <li
              key={booking.id}
              className="bg-white border border-gray-300 rounded-sm px-4 py-2"
            >
              <a
                href={`/booking/${booking.id}`}
                className="text-blue-900 flex justify-between items-center hover:underline"
              >
                <p>
                  A Booking on {readableDate(booking.date)} starting at{" "}
                  {booking.start_time} and ending at {booking.end_time} with{" "}
                  {booking.doctor_name}
                </p>
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                  >
                    <path d="M7 7h8.586L5.293 17.293l1.414 1.414L17 8.414V17h2V5H7v2z" />
                  </svg>
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full flex justify-center items-center py-8">
        <a href="/create-appointment">
          <button className="bg-blue-500 w-max text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
            Create an Appointment
          </button>
        </a>
      </div>
    </div>
  );
};

export default Home;
