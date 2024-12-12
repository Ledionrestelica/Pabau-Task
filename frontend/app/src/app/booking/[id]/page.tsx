import { Appointment } from "@/types/interface";
import { readableDate } from "@/utils/readable-date";
import { getBookingById } from "@/app/actions/actions";

const page: React.FC = async ({ params }: { params: { id: number } }) => {
  //get the id from the params
  const booking: Appointment = await getBookingById(params.id); // and pass it to the server function that fetches the booking details
  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      <div className="bg-white shadow rounded-lg p-6 max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Booking Details</h1>
        <p className="mb-2">
          This Booking is with{" "}
          <span className="font-semibold">{booking.doctor_name}</span>
        </p>
        <p className="mb-2">
          For <span className="font-semibold">{booking.service}</span>
        </p>
        <p className="mb-2">
          Date:{" "}
          <span className="font-semibold">{readableDate(booking.date)}</span>
        </p>
        <p className="mb-2">
          Start Time:{" "}
          <span className="font-semibold">{booking.start_time}</span>
        </p>
        <p className="mb-4">
          End Time: <span className="font-semibold">{booking.end_time}</span>
        </p>
        <a
          href="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Back to Bookings
        </a>
      </div>
    </div>
  );
};

export default page;
