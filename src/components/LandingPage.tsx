
import React from "react";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";
import { useUserType } from "../contexts/UserTypeContext";

const LandingPage = () => {
  const { setUserType } = useUserType();
  
  const handleDoctorClick = () => {
    setUserType("doctor");
  };
  
  const handlePatientClick = () => {
    setUserType("patient");
  };

  return (
    <div className="flex flex-col min-h-[calc(100vh-4rem)]">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 animate-fade-in">
              <h1 className="text-4xl md:text-5xl font-bold text-docblue-dark mb-6">
                AI-Powered Healthcare Experience
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8">
                DocGenius Care helps Indian doctors manage patients efficiently with AI-powered tools for consultations, prescriptions, and automated follow-ups.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/register" onClick={handleDoctorClick}>
                  <Button className="w-full sm:w-auto bg-docblue text-white hover:bg-docblue-dark py-6 px-8 text-lg">
                    I'm a Doctor
                  </Button>
                </Link>
                <Link to="/register" onClick={handlePatientClick}>
                  <Button className="w-full sm:w-auto bg-docteal-dark text-white hover:bg-docblue py-6 px-8 text-lg">
                    I'm a Patient
                  </Button>
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12 animate-slide-up">
              <img 
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                alt="Doctor using AI technology" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-docblue-dark mb-12">
            AI-Powered Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-docblue rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-docblue-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* For Doctors Section */}
      <section className="py-16 bg-gradient-to-r from-docblue-light to-docteal text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h2 className="text-3xl font-bold mb-6">For Doctors</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI-powered patient analysis and diagnosis assistance</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Automated prescription management system</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Patient history tracking and analysis</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Appointment scheduling and reminders</span>
                </li>
              </ul>
              <Link to="/register" onClick={handleDoctorClick} className="inline-block mt-8">
                <Button className="bg-white text-docblue hover:bg-gray-100">
                  Register as a Doctor
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <img 
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80" 
                alt="Doctor with patient" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* For Patients Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:order-2">
              <h2 className="text-3xl font-bold text-docblue-dark mb-6">For Patients</h2>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-docblue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Connect with relevant doctors based on symptoms</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-docblue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Maintain digital records of all consultations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-docblue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Medication reminders and refill notifications</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-6 h-6 mr-2 text-docblue flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Easy appointment booking and management</span>
                </li>
              </ul>
              <Link to="/register" onClick={handlePatientClick} className="inline-block mt-8">
                <Button className="bg-docblue text-white hover:bg-docblue-dark">
                  Register as a Patient
                </Button>
              </Link>
            </div>
            <div className="md:w-1/2 md:pr-12 md:order-1">
              <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80" 
                alt="Patient using healthcare app" 
                className="rounded-lg shadow-xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-docblue-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Experience the Future of Healthcare</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Join DocGenius Care today and transform your healthcare experience with our AI-powered platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register" onClick={handleDoctorClick}>
              <Button className="w-full sm:w-auto bg-white text-docblue-dark hover:bg-gray-100">
                Register as a Doctor
              </Button>
            </Link>
            <Link to="/register" onClick={handlePatientClick}>
              <Button className="w-full sm:w-auto bg-docteal text-docblue-dark hover:bg-docteal-dark">
                Register as a Patient
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

// Feature data
const features = [
  {
    title: "AI-Powered Diagnosis",
    description: "Upload images, voice recordings, or text descriptions for AI-assisted diagnosis and recommendations.",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    )
  },
  {
    title: "Smart Prescription Management",
    description: "Digitally manage prescriptions with automatic reminders for refills and medication schedules.",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  },
  {
    title: "Medical Records Organization",
    description: "Access your complete medical history organized and secured in one place.",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2" />
      </svg>
    )
  },
  {
    title: "Automated Appointment Scheduling",
    description: "Book appointments with AI suggesting the best available slots based on urgency and availability.",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    )
  },
  {
    title: "Personalized Health Insights",
    description: "Receive AI-generated insights and recommendations based on your medical history and current condition.",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    title: "Secure Communication",
    description: "HIPAA-compliant messaging between doctors and patients for follow-ups and quick consultations.",
    icon: (props: any) => (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    )
  }
];

export default LandingPage;
