import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LessonTypeData } from "./BookingSystem";
import { Skeleton } from "@/components/ui/skeleton";

interface ServiceSelectionProps {
  onNext: (data: {
    lessonTypeId: number;
    lessonTypeName: string;
    duration: string;
    price: number;
  }) => void;
}

const ServiceSelection = ({ onNext }: ServiceSelectionProps) => {
  const { data: lessonTypes, isLoading } = useQuery({
    queryKey: ['/api/lesson-types'],
  });

  const [selectedService, setSelectedService] = useState<LessonTypeData | null>(null);
  const [selectedDuration, setSelectedDuration] = useState<string>("1 hour");
  
  // Set first service as selected when data loads
  useEffect(() => {
    if (lessonTypes && lessonTypes.length > 0 && !selectedService) {
      setSelectedService(lessonTypes[0]);
    }
  }, [lessonTypes, selectedService]);

  const handleContinue = () => {
    if (selectedService) {
      // Calculate price based on duration
      let finalPrice = selectedService.price;
      if (selectedService.name !== "Intensive Course") {
        if (selectedDuration === "1.5 hours") {
          finalPrice = Math.floor(selectedService.price * 1.5);
        } else if (selectedDuration === "2 hours") {
          finalPrice = selectedService.price * 2;
        }
      }

      onNext({
        lessonTypeId: selectedService.id,
        lessonTypeName: selectedService.name,
        duration: selectedDuration,
        price: finalPrice,
      });
    }
  };

  const getDurationOptions = () => {
    if (!selectedService) return null;
    
    if (selectedService.name === "Intensive Course") {
      return (
        <div className="flex flex-wrap gap-3">
          <Button
            variant={selectedDuration === "20 hours" ? "default" : "outline"}
            onClick={() => setSelectedDuration("20 hours")}
          >
            20 hours
          </Button>
          <Button
            variant={selectedDuration === "30 hours" ? "default" : "outline"}
            onClick={() => setSelectedDuration("30 hours")}
          >
            30 hours
          </Button>
        </div>
      );
    }
    
    return (
      <div className="flex flex-wrap gap-3">
        <Button
          variant={selectedDuration === "1 hour" ? "default" : "outline"}
          onClick={() => setSelectedDuration("1 hour")}
        >
          1 hour
        </Button>
        <Button
          variant={selectedDuration === "1.5 hours" ? "default" : "outline"}
          onClick={() => setSelectedDuration("1.5 hours")}
        >
          1.5 hours
        </Button>
        <Button
          variant={selectedDuration === "2 hours" ? "default" : "outline"}
          onClick={() => setSelectedDuration("2 hours")}
        >
          2 hours
        </Button>
      </div>
    );
  };

  if (isLoading) {
    return (
      <div className="p-6">
        <h3 className="text-xl font-heading font-semibold mb-4">Select Your Lesson Type</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div>
                  <Skeleton className="h-5 w-32 mb-1" />
                  <Skeleton className="h-4 w-48" />
                </div>
                <Skeleton className="w-5 h-5 rounded-full" />
              </div>
              <Skeleton className="h-4 w-20 mt-3" />
            </div>
          ))}
        </div>
        
        <Skeleton className="h-6 w-40 mb-4" />
        <div className="flex flex-wrap gap-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-10 w-20" />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h3 className="text-xl font-heading font-semibold mb-4">Select Your Lesson Type</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lessonTypes?.map((type: LessonTypeData) => (
          <div
            key={type.id}
            className={`border ${
              selectedService?.id === type.id
                ? "border-primary"
                : "border-gray-200"
            } rounded-lg p-4 cursor-pointer hover:border-primary transition`}
            onClick={() => setSelectedService(type)}
          >
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-medium text-lg">{type.name}</h4>
                <p className="text-gray-600 text-sm mt-1">{type.description}</p>
              </div>
              <div className={`w-5 h-5 flex-shrink-0 mt-1 ${
                selectedService?.id === type.id ? "text-primary" : "text-transparent"
              }`}>
                <CheckCircle2 className="h-5 w-5" />
              </div>
            </div>
            <div className="mt-3 text-primary font-medium">
              £{(type.price / 100).toFixed(2)} {type.name !== "Intensive Course" ? "per hour" : `for ${type.duration / 60} hours`}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-6">
        <h3 className="text-xl font-heading font-semibold mb-4">Select Duration</h3>
        {getDurationOptions()}
      </div>
      
      <div className="mt-8 flex justify-end">
        <Button 
          onClick={handleContinue}
          disabled={!selectedService}
        >
          Continue to Date Selection
        </Button>
      </div>
    </div>
  );
};

export default ServiceSelection;
