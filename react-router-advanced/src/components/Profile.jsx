import { Outlet, Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <h2>User Profile</h2>
      <nav className="space-x-4">
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <hr />
      <Outlet />
    </div>
  );
}
