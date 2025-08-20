import { Navigate } from "react-router-dom";
import { useState } from "react";

function useAuth() {
  const [isAuthenticated] = useState(false); 
  return { isAuthenticated };
}

export default function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
}
