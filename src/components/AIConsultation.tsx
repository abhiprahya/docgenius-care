
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Input } from "./ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "sonner";

type ConsultMode = "text" | "image" | "voice";

const AIConsultation = () => {
  const { user } = useAuth();
  const [consultMode, setConsultMode] = useState<ConsultMode>("text");
  const [textInput, setTextInput] = useState("");
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  
  const handleConsult = () => {
    if (consultMode === "text" && !textInput.trim()) {
      toast.error("Please describe your symptoms or questions");
      return;
    }
    
    if (consultMode === "image" && !imageFile) {
      toast.error("Please upload an image");
      return;
    }
    
    setIsLoading(true);
    
    // Simulate AI consultation
    setTimeout(() => {
      setIsLoading(false);
      
      // Sample response
      const responses = [
        "Based on your description, you may be experiencing symptoms of seasonal allergies. I recommend taking an antihistamine like cetirizine and scheduling an appointment with an allergist if symptoms persist.",
        "The skin condition shown in the image appears to be contact dermatitis. It's advisable to avoid potential allergens and use a mild hydrocortisone cream. If it doesn't improve within a week, please consult a dermatologist.",
        "Your symptoms suggest a possible upper respiratory infection. Rest, hydration, and over-the-counter pain relievers may help. If you develop fever above 101°F or symptoms worsen after 3-5 days, please consult your physician."
      ];
      
      // Random sample response for demonstration
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      setResult(randomResponse);
      
      // Reset inputs
      setTextInput("");
      setImageFile(null);
    }, 2000);
  };
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };
  
  const handleModeChange = (mode: ConsultMode) => {
    setConsultMode(mode);
    setResult(null);
  };

  return (
    <div className="p-6 max-w-3xl mx-auto animate-fade-in">
      <h1 className="text-3xl font-bold text-docblue-dark mb-6">AI Health Consultation</h1>
      <p className="text-gray-600 mb-8">
        Describe your symptoms or upload relevant images for an initial AI assessment. 
        This is not a replacement for professional medical advice.
      </p>
      
      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-docblue-dark">Consult Method</CardTitle>
          <CardDescription>Choose how you want to provide information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-4 mb-6">
            <Button 
              onClick={() => handleModeChange("text")}
              variant={consultMode === "text" ? "default" : "outline"}
              className={consultMode === "text" ? "bg-docblue" : "border-docblue text-docblue"}
            >
              Text Description
            </Button>
            <Button 
              onClick={() => handleModeChange("image")}
              variant={consultMode === "image" ? "default" : "outline"}
              className={consultMode === "image" ? "bg-docblue" : "border-docblue text-docblue"}
            >
              Upload Image
            </Button>
            <Button 
              onClick={() => handleModeChange("voice")}
              variant={consultMode === "voice" ? "default" : "outline"}
              className={consultMode === "voice" ? "bg-docblue" : "border-docblue text-docblue"}
              disabled
            >
              Voice Record (Coming Soon)
            </Button>
          </div>
          
          {consultMode === "text" && (
            <div className="space-y-4">
              <Textarea 
                placeholder="Describe your symptoms or health questions in detail..."
                className="min-h-[150px] resize-none"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              />
            </div>
          )}
          
          {consultMode === "image" && (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                {imageFile ? (
                  <div className="space-y-2">
                    <p className="text-sm text-gray-500">Selected file: {imageFile.name}</p>
                    <Button 
                      variant="outline" 
                      className="text-red-500 border-red-300 hover:bg-red-50"
                      onClick={() => setImageFile(null)}
                    >
                      Remove
                    </Button>
                  </div>
                ) : (
                  <>
                    <p className="text-gray-500 mb-2">Upload an image relevant to your health concern</p>
                    <Input 
                      type="file" 
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden" 
                      id="image-upload"
                    />
                    <label htmlFor="image-upload">
                      <Button 
                        variant="outline" 
                        className="border-docblue text-docblue"
                        onClick={() => document.getElementById("image-upload")?.click()}
                      >
                        Select Image
                      </Button>
                    </label>
                  </>
                )}
              </div>
              <Textarea 
                placeholder="Add any additional details about the image or your symptoms (optional)..."
                className="min-h-[100px] resize-none"
                value={textInput}
                onChange={(e) => setTextInput(e.target.value)}
              />
            </div>
          )}
          
          {consultMode === "voice" && (
            <div className="p-6 text-center text-gray-500">
              <p>Voice recording feature is coming soon.</p>
              <p>Please use text description or image upload for now.</p>
            </div>
          )}
          
          <Button 
            className="w-full mt-6 bg-docblue hover:bg-docblue-dark"
            onClick={handleConsult}
            disabled={isLoading}
          >
            {isLoading ? "Analyzing..." : "Consult AI Assistant"}
          </Button>
        </CardContent>
      </Card>
      
      {result && (
        <Card className="bg-blue-50 animate-slide-up">
          <CardHeader>
            <CardTitle className="text-docblue-dark">AI Assessment Result</CardTitle>
            <CardDescription>
              This is an initial assessment only and not a diagnosis
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="p-4 bg-white rounded-lg border border-blue-100">
              <p className="text-gray-700">{result}</p>
            </div>
            
            <div className="mt-6 space-y-4">
              <p className="text-sm text-gray-600 italic">
                This assessment is generated by AI and should not replace professional medical advice.
              </p>
              
              <div className="flex flex-wrap gap-3">
                <Button className="bg-docblue hover:bg-docblue-dark">
                  Connect with Doctor
                </Button>
                <Button variant="outline" className="border-docblue text-docblue">
                  Save to Health Record
                </Button>
                <Button variant="outline" className="border-docblue text-docblue">
                  Schedule Appointment
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default AIConsultation;
