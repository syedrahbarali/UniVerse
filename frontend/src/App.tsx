import { Route, Routes } from "react-router-dom";
import Features from "./pages/Features";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/admin/Dashboard";
import AddEvent from "./pages/admin/AddEvent";
import ManageUsers from "./pages/admin/ManageUsers";
import ManageReports from "./pages/admin/Reports";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/add-event" element={<AddEvent />} />
        {/* <Route path="/admin/manage-users" element={< />} /> */}
        {/* <Route path="/admin/reports" element={< />} /> */}
      </Routes>
    </div>
  );
};

export default App;
