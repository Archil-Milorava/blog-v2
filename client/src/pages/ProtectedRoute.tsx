import React, { ReactNode } from "react";
import { useCurrentUser } from "../services/useAuthentication";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { currentUserData, isLoading } = useCurrentUser();

  if (isLoading) return <div>loading...</div>;

  if (!currentUserData && !isLoading) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default ProtectedRoute;
