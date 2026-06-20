import {
BrowserRouter,
Routes,
Route
} from "react-router-dom";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Services from "./pages/Services";
import BookAppointment from "./pages/BookAppointment";
import MyAppointments from "./pages/MyAppointments";
import ProviderDashboard from "./pages/ProviderDashboard";
import ManageSlots from "./pages/ManageSlots";
import ManageAppointments from "./pages/ManageAppointments";
import Profile from "./pages/Profile";
function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route
          path="/"
          element={<Login />}
        />

        <Route
          path="/register"
          element={<Register />}
        />

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/services"
          element={<Services />}
        />

        <Route
          path="/book"
          element={<BookAppointment />}
        />

        <Route
          path="/appointments"
          element={<MyAppointments />}
        />

        <Route
          path="/provider-dashboard"
          element={<ProviderDashboard />}
        />

        <Route
          path="/manage-slots"
          element={<ManageSlots />}
        />

        <Route
          path="/manage-appointments"
          element={<ManageAppointments />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;