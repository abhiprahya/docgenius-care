
import React from "react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold text-docblue">DocGenius</span>
          <span className="text-docteal-dark font-medium">Care</span>
        </Link>
        
        <nav className="hidden md:flex gap-6">
          {isAuthenticated ? (
            <>
              <Link to="/dashboard" className="text-docblue-dark hover:text-docblue transition-colors">
                Dashboard
              </Link>
              {user?.type === "doctor" && (
                <>
                  <Link to="/patients" className="text-docblue-dark hover:text-docblue transition-colors">
                    Patients
                  </Link>
                  <Link to="/prescriptions" className="text-docblue-dark hover:text-docblue transition-colors">
                    Prescriptions
                  </Link>
                </>
              )}
              {user?.type === "patient" && (
                <>
                  <Link to="/consultations" className="text-docblue-dark hover:text-docblue transition-colors">
                    Consultations
                  </Link>
                  <Link to="/medications" className="text-docblue-dark hover:text-docblue transition-colors">
                    Medications
                  </Link>
                </>
              )}
              <Link to="/appointments" className="text-docblue-dark hover:text-docblue transition-colors">
                Appointments
              </Link>
            </>
          ) : (
            <>
              <Link to="/features" className="text-docblue-dark hover:text-docblue transition-colors">
                Features
              </Link>
              <Link to="/about" className="text-docblue-dark hover:text-docblue transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-docblue-dark hover:text-docblue transition-colors">
                Contact
              </Link>
            </>
          )}
        </nav>
        
        <div className="flex items-center gap-4">
          {isAuthenticated ? (
            <>
              <Link to="/profile">
                <div className="w-10 h-10 rounded-full bg-docblue-light flex items-center justify-center text-white font-medium">
                  {user?.name.charAt(0)}
                </div>
              </Link>
              <Button 
                variant="outline" 
                className="border-docblue text-docblue hover:bg-docblue hover:text-white"
                onClick={logout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Link to="/login">
                <Button variant="outline" className="border-docblue text-docblue hover:bg-docblue hover:text-white">
                  Login
                </Button>
              </Link>
              <Link to="/register">
                <Button className="bg-docblue text-white hover:bg-docblue-dark">
                  Register
                </Button>
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
