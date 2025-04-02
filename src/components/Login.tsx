
import React, { useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    userType: "doctor" as "doctor" | "patient"
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleUserTypeChange = (type: "doctor" | "patient") => {
    setFormData(prev => ({ ...prev, userType: type }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate
    if (!formData.email.trim() || !formData.password) {
      toast.error("Please enter both email and password");
      return;
    }

    // Demo user data (in a real app this would be verified against a database)
    const demoUser = {
      id: Math.random().toString(36).substring(2, 11),
      name: formData.userType === "doctor" ? "Dr. Demo User" : "Patient Demo",
      email: formData.email,
      type: formData.userType,
      profileComplete: true
    };

    // Log the user in
    login(demoUser);
    toast.success("Successfully logged in");
    navigate("/dashboard");
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-docblue-dark">Welcome Back</CardTitle>
          <CardDescription className="text-center">
            Login to your DocGenius Care account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex gap-2 mb-4">
              <Button
                type="button"
                className={`flex-1 ${
                  formData.userType === "doctor" 
                    ? "bg-docblue text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => handleUserTypeChange("doctor")}
              >
                Doctor
              </Button>
              <Button
                type="button"
                className={`flex-1 ${
                  formData.userType === "patient" 
                    ? "bg-docblue text-white" 
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => handleUserTypeChange("patient")}
              >
                Patient
              </Button>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                name="email" 
                type="email" 
                placeholder="your.email@example.com" 
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            
            <div className="space-y-2">
              <div className="flex justify-between">
                <Label htmlFor="password">Password</Label>
                <a href="/forgot-password" className="text-sm text-docblue hover:underline">
                  Forgot password?
                </a>
              </div>
              <Input 
                id="password" 
                name="password" 
                type="password" 
                placeholder="••••••••" 
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-docblue text-white hover:bg-docblue-dark"
            >
              Login
            </Button>
            
            <p className="text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <a href="/register" className="text-docblue hover:underline">
                Register now
              </a>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
