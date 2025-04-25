import { useState } from "react";
import { motion } from "framer-motion";

const AddEvent = () => {
  const [eventPoster, setEventPoster] = useState<File | null>(null);

  const handlePosterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setEventPoster(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    alert("Event Submitted!");
  };

  return (
    <motion.div
      className="max-w-3xl mx-auto bg-white shadow-xl p-8 rounded-2xl mt-10"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <h2 className="text-2xl font-bold text-center text-indigo-600 mb-6">
        Add New Event
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block font-medium text-gray-700">Event Name</label>
          <input
            type="text"
            required
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g., TechFest 2025"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">Description</label>
          <textarea
            required
            className="w-full border p-3 rounded-lg h-32 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write a short description..."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block font-medium text-gray-700">Date</label>
            <input
              type="date"
              required
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Time</label>
            <input
              type="time"
              required
              className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        </div>

        <div>
          <label className="block font-medium text-gray-700">Venue</label>
          <input
            type="text"
            required
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g., ABES Auditorium Hall"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Max Participants
          </label>
          <input
            type="number"
            min={1}
            required
            className="w-full border p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g., 200"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700">
            Upload Poster
          </label>
          <input
            type="file"
            accept="image/*"
            onChange={handlePosterChange}
            className="mt-2"
          />

          {eventPoster && (
            <div className="mt-4 w-40 h-40 rounded-lg overflow-hidden border shadow">
              <img
                src={URL.createObjectURL(eventPoster)}
                alt="Poster Preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        <motion.button
          type="submit"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-indigo-600 text-white py-3 px-6 rounded-xl w-full font-semibold hover:bg-indigo-700 transition"
        >
          Submit Event
        </motion.button>
      </form>
    </motion.div>
  );
};

export default AddEvent;
