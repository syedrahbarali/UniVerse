import {
  FaUsers,
  FaCalendarAlt,
  FaCheckCircle,
  FaChartBar,
  FaPlus,
  FaUserCog,
  FaFileAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    title: "Registered Users",
    value: 1240,
    icon: FaUsers,
    color: "bg-indigo-100 text-indigo-600",
  },
  {
    title: "Total Events",
    value: 78,
    icon: FaCalendarAlt,
    color: "bg-green-100 text-green-600",
  },
  {
    title: "Pending Approvals",
    value: 6,
    icon: FaCheckCircle,
    color: "bg-yellow-100 text-yellow-600",
  },
  {
    title: "Tickets Issued",
    value: 2300,
    icon: FaChartBar,
    color: "bg-pink-100 text-pink-600",
  },
];

const quickLinks = [
  { label: "Add Event", icon: FaPlus, url: "add-event" },
  { label: "Manage Users", icon: FaUserCog, url: "manage-users" },
  { label: "Reports", icon: FaFileAlt, url: "reports" },
];

const recentRequests = [
  {
    name: "TechFest 2025",
    organizer: "Rahul Sharma",
    date: "April 10",
    status: "Pending",
  },
  {
    name: "Cultural Night",
    organizer: "Priya Mehra",
    date: "April 12",
    status: "Pending",
  },
];

const Dashboard = () => {
  const [approvals, setApprovals] = useState(recentRequests);
  const navigate = useNavigate();

  const handleApprove = (index: number) => {
    const updated = [...approvals];
    updated.splice(index, 1);
    setApprovals(updated);
    alert("Event Approved ✅");
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>
          <p className="text-gray-500 mt-1">Manage everything at one place</p>
        </div>

        {/* Stats */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ scale: 1.04 }}
                className="bg-white rounded-2xl shadow-md p-5 flex items-center gap-4"
              >
                <div className={`p-4 rounded-full ${stat.color}`}>
                  <Icon className="text-xl" />
                </div>
                <div>
                  <h3 className="text-sm text-gray-500">{stat.title}</h3>
                  <p className="text-xl font-semibold text-gray-800">
                    {stat.value}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Links */}
        <div className="mt-10">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Quick Actions
          </h2>
          <div className="flex gap-6">
            {quickLinks.map((link, i) => (
              <button
                key={i}
                onClick={() => navigate(`/admin/${link.url}`)}
                className="flex items-center gap-2 bg-white shadow hover:shadow-md transition px-4 py-2 rounded-xl text-sm font-medium"
              >
                <link.icon className="text-gray-500" />
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pending Approvals */}
        <div className="mt-10 bg-white rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Pending Event Approvals
          </h2>
          {approvals.length === 0 ? (
            <p className="text-gray-400 text-sm text-center py-8 border-2 border-dashed border-gray-200 rounded-xl">
              No pending requests
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left text-gray-600">
                <thead className="bg-gray-100 text-xs uppercase text-gray-500">
                  <tr>
                    <th scope="col" className="px-4 py-3">
                      Event
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Organizer
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Date
                    </th>
                    <th scope="col" className="px-4 py-3">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {approvals.map((event, i) => (
                    <tr key={i} className="bg-white border-b hover:bg-gray-50">
                      <td className="px-4 py-3 font-medium">{event.name}</td>
                      <td className="px-4 py-3">{event.organizer}</td>
                      <td className="px-4 py-3">{event.date}</td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleApprove(i)}
                          className="text-white bg-green-500 hover:bg-green-600 px-3 py-1 rounded-md text-xs"
                        >
                          Approve
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
