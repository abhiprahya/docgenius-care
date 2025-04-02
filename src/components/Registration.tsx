
import React, { useState } from "react";
import { useUserType } from "../contexts/UserTypeContext";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Registration = () => {
  const { userType } = useUserType();
  const { login } = useAuth();
  const navigate = useNavigate();
  
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    // Doctor specific fields
    specialization: "",
    licenseNumber: "",
    experience: "",
    clinic: "",
    // Patient specific fields
    age: "",
    gender: "",
    phoneNumber: "",
    address: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateBasicInfo = () => {
    if (!formData.name.trim()) return "Name is required";
    if (!formData.email.trim()) return "Email is required";
    if (!/^\S+@\S+\.\S+$/.test(formData.email)) return "Email is invalid";
    if (!formData.password) return "Password is required";
    if (formData.password.length < 8) return "Password must be at least 8 characters";
    if (formData.password !== formData.confirmPassword) return "Passwords do not match";
    return null;
  };

  const validateDoctorInfo = () => {
    if (!formData.specialization.trim()) return "Specialization is required";
    if (!formData.licenseNumber.trim()) return "License number is required";
    return null;
  };

  const validatePatientInfo = () => {
    if (!formData.age.trim()) return "Age is required";
    if (!formData.gender.trim()) return "Gender is required";
    if (!formData.phoneNumber.trim()) return "Phone number is required";
    return null;
  };

  const handleNextStep = () => {
    const error = validateBasicInfo();
    if (error) {
      toast.error(error);
      return;
    }
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    let error = null;
    if (userType === "doctor") {
      error = validateDoctorInfo();
    } else if (userType === "patient") {
      error = validatePatientInfo();
    }
    
    if (error) {
      toast.error(error);
      return;
    }

    // Simulate registration
    const userData = {
      id: Math.random().toString(36).substring(2, 11),
      name: formData.name,
      email: formData.email,
      type: userType as "doctor" | "patient",
      profileComplete: true
    };

    // Log the user in
    login(userData);
    toast.success(`Successfully registered as a ${userType}`);
    navigate("/dashboard");
  };

  if (!userType) {
    return (
      <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50">
        <Card className="w-full max-w-md animate-fade-in">
          <CardHeader>
            <CardTitle className="text-2xl text-center text-docblue-dark">Select User Type</CardTitle>
            <CardDescription className="text-center">
              Please select whether you're a doctor or a patient
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              className="w-full bg-docblue hover:bg-docblue-dark py-6"
              onClick={() => navigate("/register", { state: { userType: "doctor" } })}
            >
              I'm a Doctor
            </Button>
            <Button 
              className="w-full bg-docteal-dark hover:bg-docblue py-6"
              onClick={() => navigate("/register", { state: { userType: "patient" } })}
            >
              I'm a Patient
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-50 py-8">
      <Card className="w-full max-w-md animate-fade-in">
        <CardHeader>
          <CardTitle className="text-2xl text-center text-docblue-dark">
            Register as a {userType === "doctor" ? "Doctor" : "Patient"}
          </CardTitle>
          <CardDescription className="text-center">
            {step === 1 
              ? "Create your account with basic information" 
              : `Please provide additional ${userType} information`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={step === 1 ? handleNextStep : handleSubmit} className="space-y-4">
            {step === 1 ? (
              // Step 1: Basic Information
              <>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input 
                    id="name" 
                    name="name" 
                    placeholder="Dr. John Doe" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    placeholder="doctor@example.com" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
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
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword">Confirm Password</Label>
                  <Input 
                    id="confirmPassword" 
                    name="confirmPassword" 
                    type="password" 
                    placeholder="••••••••" 
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Button 
                  type="button"
                  className="w-full bg-docblue text-white hover:bg-docblue-dark"
                  onClick={handleNextStep}
                >
                  Next
                </Button>
              </>
            ) : (
              // Step 2: User Type Specific Fields
              <>
                {userType === "doctor" ? (
                  // Doctor specific fields
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="specialization">Specialization</Label>
                      <Input 
                        id="specialization" 
                        name="specialization" 
                        placeholder="Cardiology" 
                        value={formData.specialization}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="licenseNumber">Medical License Number</Label>
                      <Input 
                        id="licenseNumber" 
                        name="licenseNumber" 
                        placeholder="MCI-123456" 
                        value={formData.licenseNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Years of Experience</Label>
                      <Input 
                        id="experience" 
                        name="experience" 
                        placeholder="10" 
                        value={formData.experience}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="clinic">Clinic/Hospital Name</Label>
                      <Input 
                        id="clinic" 
                        name="clinic" 
                        placeholder="City Hospital" 
                        value={formData.clinic}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                ) : (
                  // Patient specific fields
                  <>
                    <div className="space-y-2">
                      <Label htmlFor="age">Age</Label>
                      <Input 
                        id="age" 
                        name="age" 
                        placeholder="35" 
                        value={formData.age}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="gender">Gender</Label>
                      <Input 
                        id="gender" 
                        name="gender" 
                        placeholder="Male/Female/Other" 
                        value={formData.gender}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phoneNumber">Phone Number</Label>
                      <Input 
                        id="phoneNumber" 
                        name="phoneNumber" 
                        placeholder="+91 9876543210" 
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input 
                        id="address" 
                        name="address" 
                        placeholder="123 Street, City, State" 
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                  </>
                )}
                <div className="flex gap-4 pt-2">
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="flex-1 border-docblue text-docblue"
                    onClick={() => setStep(1)}
                  >
                    Back
                  </Button>
                  <Button 
                    type="submit" 
                    className="flex-1 bg-docblue text-white hover:bg-docblue-dark"
                  >
                    Register
                  </Button>
                </div>
              </>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Registration;
