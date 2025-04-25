import { motion } from "framer-motion";
import { FaQrcode, FaBell, FaUserCheck, FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    icon: <FaQrcode className="text-3xl text-indigo-600" />,
    title: "QR Attendance",
    description:
      "Scan and mark attendance instantly with unique event QR codes.",
  },
  {
    icon: <FaBell className="text-3xl text-rose-600" />,
    title: "Notifications",
    description:
      "Send real-time updates and alerts to all registered participants.",
  },
  {
    icon: <FaUserCheck className="text-3xl text-emerald-600" />,
    title: "Admin Controls",
    description:
      "Manage events, track participation, and control user access easily.",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-gradient-to-br from-indigo-100 via-white to-purple-100 min-h-screen overflow-hidden">
      {/* Decorative blobs */}
      <div className="absolute top-0 -left-32 w-[500px] h-[500px] bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse" />

      <main className="relative z-10 flex flex-col items-center text-center px-6 py-20 md:py-32">
        {/* Hero Section */}
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-extrabold text-gray-900 mb-6"
        >
          Welcome to <span className="text-indigo-600">UniVerse</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl text-lg text-gray-600 mb-10"
        >
          A smart event management portal for colleges. Handle registrations,
          attendance, and real-time updates with ease.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex gap-4 flex-wrap justify-center mb-16">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/login")}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg"
          >
            Get Started <FaArrowRight />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/features")}
            className="bg-white border border-indigo-600 text-indigo-600 px-6 py-3 rounded-full font-semibold shadow-md"
          >
            Learn More
          </motion.button>
        </div>

        {/* Feature Cards */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl w-full px-4"
        >
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 backdrop-blur-md text-left"
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm">{card.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </main>
    </div>
  );
};

export default Home;
