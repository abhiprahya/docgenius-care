
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import Dashboard from "../components/Dashboard";
import LandingPage from "../components/LandingPage";

const Index = () => {
  const { isAuthenticated } = useAuth();

  return isAuthenticated ? <Dashboard /> : <LandingPage />;
};

export default Index;
