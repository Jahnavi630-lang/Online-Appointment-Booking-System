import { Link } from "react-router-dom";

function ProviderDashboard() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px"
      }}
    >
      <h1>Provider Dashboard</h1>

      <Link to="/manage-slots">
        Manage Available Slots
      </Link>

      <br /><br />

      <Link to="/manage-appointments">
        Manage Appointments
      </Link>
    </div>
  );
}

export default ProviderDashboard;