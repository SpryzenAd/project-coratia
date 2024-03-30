"use client";
import React, { useState } from "react";
import "./form.css";

export default function ContactUsForm() {
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    const formData = new FormData(event.target);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbyMK-FMXlNDftHM_V2PEmOcbtx1TlpuJlornwBW77WUIgdACmfmNEl-0vzYRZ5eP0ax/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        const responseData = await response.text();
        setMessage(responseData);
      } else {
        setMessage("Error submitting form.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Error submitting form.");
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div>
      <h1>{message}</h1>
      <div className="max-w-md">
        <form
          onSubmit={handleSubmit}
          className="bg-[#72b0c7] shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <div className="mb-4 flex flex-wrap">
            <div className="w-full md:w-1/2 md:pr-2 mb-4 md:mb-0">
              <label
                htmlFor="first-name"
                className="block text-white text-sm font-bold mb-2"
              >
                First Name
              </label>
              <input
                id="first-name"
                name="firstname"
                type="text"
                placeholder="First Name"
                className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
            <div className="w-full md:w-1/2 md:pl-2">
              <label
                htmlFor="last-name"
                className="block text-white text-sm font-bold mb-2"
              >
                Last Name
              </label>
              <input
                id="last-name"
                name="lastname"
                type="text"
                placeholder="Last Name"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-white text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-white text-sm font-bold mb-2"
            >
              Phone
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Phone"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="query"
              className="block text-white text-sm font-bold mb-2"
            >
              Your Query
            </label>
            <textarea
              id="query"
              name="query"
              placeholder="Enter your query"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              value={submitting ? "Submitting..." : "Submit"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
