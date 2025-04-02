
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { useAuth } from "../contexts/AuthContext";
import { Link } from "react-router-dom";

// Sample data
const upcomingAppointments = [
  { id: 1, patientName: "Amit Sharma", time: "10:00 AM", date: "Today", reason: "Follow-up", status: "Confirmed" },
  { id: 2, patientName: "Priya Patel", time: "2:30 PM", date: "Today", reason: "Consultation", status: "Confirmed" },
  { id: 3, patientName: "Rahul Singh", time: "11:15 AM", date: "Tomorrow", reason: "New Patient", status: "Pending" },
];

const recentPatients = [
  { id: 1, name: "Vikram Mehta", lastVisit: "Yesterday", condition: "Hypertension", status: "Stable" },
  { id: 2, name: "Neha Gupta", lastVisit: "3 days ago", condition: "Diabetes", status: "Improving" },
  { id: 3, name: "Rajesh Kumar", lastVisit: "1 week ago", condition: "Arthritis", status: "Review needed" },
];

const DoctorDashboard = () => {
  const { user } = useAuth();

  return (
    <div className="p-6 max-w-7xl mx-auto animate-fade-in">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-docblue-dark">Welcome, {user?.name}</h1>
        <p className="text-gray-600">Here's what's happening with your patients today</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card className="bg-docteal-light">
          <CardHeader className="pb-2">
            <CardTitle className="text-docblue-dark text-lg">Today's Appointments</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-docblue">{upcomingAppointments.filter(a => a.date === "Today").length}</p>
            <p className="text-sm text-gray-600">View all appointments</p>
          </CardContent>
        </Card>
        
        <Card className="bg-blue-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-docblue-dark text-lg">Total Patients</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-docblue">42</p>
            <p className="text-sm text-gray-600">3 new this week</p>
          </CardContent>
        </Card>
        
        <Card className="bg-purple-50">
          <CardHeader className="pb-2">
            <CardTitle className="text-docblue-dark text-lg">Pending Reports</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold text-purple-700">7</p>
            <p className="text-sm text-gray-600">Review and respond</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-docblue-dark">Upcoming Appointments</CardTitle>
            <CardDescription>Your schedule for the next 24 hours</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {upcomingAppointments.map(appointment => (
                <div key={appointment.id} className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="font-medium">{appointment.patientName}</p>
                    <p className="text-sm text-gray-500">
                      {appointment.date} at {appointment.time} - {appointment.reason}
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
              ))}
              <Link to="/appointments">
                <Button variant="outline" className="w-full border-docblue text-docblue">
                  View All Appointments
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-docblue-dark">Recent Patients</CardTitle>
            <CardDescription>Patients you've seen recently</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentPatients.map(patient => (
                <div key={patient.id} className="flex items-center justify-between border-b pb-4">
                  <div>
                    <p className="font-medium">{patient.name}</p>
                    <p className="text-sm text-gray-500">
                      Last visit: {patient.lastVisit} - {patient.condition}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      patient.status === "Stable" 
                        ? "bg-green-100 text-green-800" 
                        : patient.status === "Improving"
                          ? "bg-blue-100 text-blue-800"
                          : "bg-red-100 text-red-800"
                    }`}>
                      {patient.status}
                    </span>
                    <Button variant="outline" size="sm" className="border-docblue text-docblue">
                      View Record
                    </Button>
                  </div>
                </div>
              ))}
              <Link to="/patients">
                <Button variant="outline" className="w-full border-docblue text-docblue">
                  View All Patients
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle className="text-docblue-dark">AI Insights</CardTitle>
            <CardDescription>AI-generated insights about your practice</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-100">
                <h4 className="font-medium text-docblue-dark mb-2">Patient Adherence Trends</h4>
                <p className="text-sm text-gray-600">85% of your patients are adhering to prescribed medications, which is 10% higher than average.</p>
              </div>
              <div className="p-4 bg-green-50 rounded-lg border border-green-100">
                <h4 className="font-medium text-green-800 mb-2">Treatment Effectiveness</h4>
                <p className="text-sm text-gray-600">Your treatment plans for hypertension have shown a 23% improvement in patient outcomes over the last 3 months.</p>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg border border-purple-100">
                <h4 className="font-medium text-purple-800 mb-2">Patient Load Analysis</h4>
                <p className="text-sm text-gray-600">Tuesday and Thursday mornings have the highest patient load. Consider adjusting your schedule for better efficiency.</p>
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
              <Button className="w-full bg-docblue text-white">New Consultation</Button>
              <Button variant="outline" className="w-full border-docblue text-docblue">Create Prescription</Button>
              <Button variant="outline" className="w-full border-docblue text-docblue">Upload Lab Reports</Button>
              <Button variant="outline" className="w-full border-docblue text-docblue">Schedule Follow-up</Button>
              <Button variant="outline" className="w-full border-docblue text-docblue">Patient Reminders</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DoctorDashboard;
