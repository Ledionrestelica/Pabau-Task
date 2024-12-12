"use client";

import React, { useState } from "react";
import { createBooking } from "../actions/actions";

const Page = () => {
  const [data, setData] = useState({
    service: "",
    name: "",
    start: "",
    end: "",
    date: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await createBooking(data);
      alert("Booking submitted successfully!");
      setData({
        service: "",
        name: "",
        start: "",
        end: "",
        date: "",
      });
      window.location.href = "/";
    } catch (error) {
      console.error("Unexpected error:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center py-3">
      <div className="border max-w-[800px] min-h-[50vh] px-2 py-2 border-gray-300 rounded-md w-full">
        <div className="w-full text-center border-b border-gray-200 pb-2">
          <h1 className="text-black font-bold text-3xl">
            Create an appointment
          </h1>
        </div>
        <div>
          <form
            className="w-full flex flex-col p-2 gap-3"
            onSubmit={handleSubmit}
          >
            <div className="flex gap-2 md:flex-row flex-col">
              <div className="flex flex-col flex-1">
                <label htmlFor="service">Service Name</label>
                <select
                  name="service"
                  value={data.service}
                  onChange={handleChange}
                  className="border focus:outline-none border-zinc-400 rounded-md px-2 py-2"
                >
                  <option value="" disabled>
                    Choose an option
                  </option>
                  <option value="service a">Service A</option>
                  <option value="service b">Service B</option>
                  <option value="service c">Service C</option>
                  <option value="service d">Service D</option>
                  <option value="service e">Service E</option>
                </select>
              </div>
              <div className="flex flex-col flex-1">
                <label htmlFor="name">Doctor Name</label>
                <input
                  className="border focus:outline-none border-zinc-400 rounded-md px-2 py-2"
                  type="text"
                  required
                  id="name"
                  name="name"
                  placeholder="Enter Doctor name"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <label htmlFor="start">Start Time</label>
            <input
              className="border flex-1 focus:outline-none border-zinc-400 rounded-md px-2 py-2"
              id="start"
              name="start"
              required
              type="time"
              value={data.start}
              onChange={handleChange}
            />
            <label htmlFor="end">End Time</label>
            <input
              className="border flex-1 focus:outline-none border-zinc-400 rounded-md px-2 py-2"
              id="end"
              name="end"
              required
              type="time"
              value={data.end}
              onChange={handleChange}
            />
            <label htmlFor="date">Date</label>
            <input
              className="border flex-1 focus:outline-none border-zinc-400 rounded-md px-2 py-2"
              type="date"
              required
              id="date"
              name="date"
              min={new Date().toISOString().split("T")[0]}
              value={data.date}
              onChange={handleChange}
            />
            <button className="bg-blue-500 text-white rounded-md py-3 font-bold disabled:cursor-not-allowed">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
