
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import DoctorDashboard from "./DoctorDashboard";
import PatientDashboard from "./PatientDashboard";

const Dashboard = () => {
  const { user } = useAuth();
  
  if (!user) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50">
        <p className="text-xl text-gray-600">Please log in to view your dashboard.</p>
      </div>
    );
  }

  return user.type === "doctor" ? <DoctorDashboard /> : <PatientDashboard />;
};

export default Dashboard;
