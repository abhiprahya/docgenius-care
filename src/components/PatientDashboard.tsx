
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

// Sample data
const upcomingAppointments = [
  { id: 1, doctorName: "Dr. Anil Kapoor", specialty: "Cardiologist", time: "11:30 AM", date: "Tomorrow", status: "Confirmed" },
  { id: 2, doctorName: "Dr. Sunita Sharma", specialty: "Dermatologist", time: "3:00 PM", date: "15 May", status: "Pending" },
];

const currentMedications = [
  { id: 1, name: "Amlodipine", dosage: "10mg", frequency: "Once daily", remaining: 7, refillStatus: "Refill needed" },
  { id: 2, name: "Metformin", dosage: "500mg", frequency: "Twice daily", remaining: 15, refillStatus: "Adequate" },
  { id: 3, name: "Vitamin D3", dosage: "60,000 IU", frequency: "Once weekly", remaining: 3, refillStatus: "Refill soon" },
];

const PatientDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6 max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-docblue-dark">Welcome, {user?.name}</h1>
        <p className="text-gray-600">Here's an overview of your health information</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-docteal-light">
          <CardHeader className="pb-2">
            <CardTitle className="text-docblue-dark text-lg">Upcoming Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-docblue">{upcomingAppointments.length}</p>
            <p className="text-sm text-gray-600">Next: {upcomingAppointments[0]?.date}</p>
          </CardContent>
        </Card>
        
        <Card className="bg-blue-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-docblue-dark text-lg">Active Medications</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-docblue">{currentMedications.length}</p>
            <p className="text-sm text-gray-600">1 refill needed</p>
          </CardContent>
        </Card>
        
        <Card className="bg-green-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-docblue-dark text-lg">Health Score</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-green-600">86%</p>
            <p className="text-sm text-gray-600">+3% from last month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-docblue-dark">Upcoming Appointments</CardTitle>
            <CardDescription>Your scheduled doctor visits</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.length > 0 ? (
                upcomingAppointments.map(appointment => (
                  <div key={appointment.id} className="flex items-center justify-between border-b pb-4">
                    <div>
                      <p className="font-medium">{appointment.doctorName}</p>
                      <p className="text-sm text-gray-500">
                        {appointment.specialty} • {appointment.date} at {appointment.time}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        appointment.status === "Confirmed" 
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}>
                        {appointment.status}
                      </span>
                      <Button variant="outline" size="sm" className="border-docblue text-docblue">
                        Details
                      </Button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No upcoming appointments</p>
              )}
              
              <div className="pt-2">
                <Link to="/appointments">
                  <Button variant="outline" className="w-full border-docblue text-docblue">
                    Schedule New Appointment
                  </Button>
                </Link>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-docblue-dark">Current Medications</CardTitle>
            <CardDescription>Your prescribed medications and supplements</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentMedications.map(medication => (
                <div key={medication.id} className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="font-medium">{medication.name} ({medication.dosage})</p>
                    <p className="text-sm text-gray-500">
                      {medication.frequency} • {medication.remaining} days remaining
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      medication.refillStatus === "Adequate" 
                        ? "bg-green-100 text-green-800" 
                        : medication.refillStatus === "Refill soon"
                          ? "bg-yellow-100 text-yellow-800"
                          : "bg-red-100 text-red-800"
                    }`}>
                      {medication.refillStatus}
                    </span>
                    <Button variant="outline" size="sm" className="border-docblue text-docblue">
                      Refill
                    </Button>
                  </div>
                </div>
              ))}
              
              <Link to="/medications">
                <Button variant="outline" className="w-full border-docblue text-docblue">
                  View All Medications
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-docblue-dark">Health Insights</CardTitle>
            <CardDescription>AI-generated insights about your health</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium text-docblue-dark mb-2">Sleep Pattern Analysis</h4>
                <p className="text-sm text-gray-600">Your average sleep duration has decreased by 45 minutes in the last week. Consider adjusting your sleep schedule.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <h4 className="font-medium text-green-800 mb-2">Medication Adherence</h4>
                <p className="text-sm text-gray-600">You've maintained 92% adherence to your medication schedule this month. Great job!</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                <h4 className="font-medium text-purple-800 mb-2">Activity Recommendation</h4>
                <p className="text-sm text-gray-600">Based on your health profile, a 30-minute daily walk would help improve your cardiovascular health.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-docblue-dark">Quick Actions</CardTitle>
            <CardDescription>Common tasks for quick access</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <Button className="w-full bg-docblue text-white">New Symptom Check</Button>
              <Button variant="outline" className="w-full border-docblue text-docblue">Request Refill</Button>
              <Button variant="outline" className="w-full border-docblue text-docblue">Upload Medical Records</Button>
              <Button variant="outline" className="w-full border-docblue text-docblue">Message Doctor</Button>
              <Button variant="outline" className="w-full border-docblue text-docblue">View Health Timeline</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PatientDashboard;
