import { motion } from "framer-motion";
import { FaUsers, FaCalendarCheck, FaQrcode, FaChartBar } from "react-icons/fa";

const features = [
  {
    icon: <FaUsers className="text-purple-600 text-4xl mb-3" />,
    title: "Smart Attendee Management",
    description: "Track attendees using QR codes with real-time updates.",
  },
  {
    icon: <FaCalendarCheck className="text-indigo-600 text-4xl mb-3" />,
    title: "Event Scheduling",
    description: "Create and manage events with reminders and updates.",
  },
  {
    icon: <FaQrcode className="text-rose-500 text-4xl mb-3" />,
    title: "QR-Based Check-in",
    description: "Fast and secure check-ins with unique QR for each event.",
  },
  {
    icon: <FaChartBar className="text-emerald-600 text-4xl mb-3" />,
    title: "Insightful Analytics",
    description: "Monitor participation trends and improve event strategy.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-indigo-800 mb-6"
        >
          Core Features of <span className="text-purple-600">UniVerse</span>
        </motion.h2>

        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Explore how UniVerse helps you manage events effortlessly and makes
          your student life easier.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition duration-300"
            >
              {feat.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feat.title}
              </h3>
              <p className="text-gray-500">{feat.description}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="mt-14 space-x-4">
          <a
            href="/signup"
            className="inline-block bg-purple-600 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-purple-700 transition"
          >
            Get Started
          </a>
          <a
            href="/"
            className="inline-block border border-purple-600 text-purple-600 px-6 py-3 rounded-xl hover:bg-purple-100 transition"
          >
            Go to Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default Features;
