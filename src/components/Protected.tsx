import { useAuth } from "@/context/Logincontext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // const { loading } = useAuth();
  const loading =false
  const login=true

  if (loading) return <div>Loading...</div>;

  if (!login) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;