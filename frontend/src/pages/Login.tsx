import { useState } from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin =  (e: React.FormEvent) => {
    e.preventDefault();

     fetch("http://localhost:3000/api/v1/login",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
     }).then(async res => await res.json()).then(res => {
      console.log(res)
    })
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-100 to-purple-100 px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Login to <span className="text-purple-600">UniVerse</span>
        </h2>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="text-gray-600 font-medium block mb-1">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-xl px-3 py-2 bg-white shadow-inner">
              <FaUser className="text-indigo-500 mr-2" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
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
              <FaLock className="text-purple-500 mr-2" />
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
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-xl transition duration-300 shadow-md"
          >
            Login
          </button>

          <p className="text-center text-sm text-gray-500 mt-2">
            Don't have an account?{" "}
            <a href="/signup" className="text-indigo-600 hover:underline">
              Sign up
            </a>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default Login;
  