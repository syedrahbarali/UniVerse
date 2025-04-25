import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registering:", name, email, password);
    // API call or navigation logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-100 to-indigo-100 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Register for <span className="text-purple-600">UniVerse</span>
        </h2>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label className="text-gray-600 font-medium block mb-1">
              Full Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 bg-white shadow-inner">
              <FaUser className="text-indigo-500 mr-2" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                className="outline-none w-full bg-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-gray-600 font-medium block mb-1">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 bg-white shadow-inner">
              <FaEnvelope className="text-purple-500 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="john@example.com"
                className="outline-none w-full bg-transparent"
                required
              />
            </div>
          </div>

          <div>
            <label className="text-gray-600 font-medium block mb-1">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 bg-white shadow-inner">
              <FaLock className="text-indigo-500 mr-2" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="outline-none w-full bg-transparent"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md"
          >
            Create Account
          </button>

          <p className="text-center text-sm text-gray-500 mt-2">
            Already have an account?{" "}
            <a href="/login" className="text-indigo-600 hover:underline">
              Login
            </a>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Signup;
