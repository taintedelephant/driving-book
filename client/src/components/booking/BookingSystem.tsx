import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import ServiceSelection from "./ServiceSelection";
import DateSelection from "./DateSelection";
import CustomerDetails from "./CustomerDetails";
import PaymentSelection from "./PaymentSelection";
import BookingConfirmation from "./BookingConfirmation";

export type BookingStep = 1 | 2 | 3 | 4 | "confirmation";

export type LessonTypeData = {
  id: number;
  name: string;
  description: string;
  price: number;
  duration: number;
};

export type BookingData = {
  lessonTypeId: number;
  lessonTypeName: string;
  duration: string;
  date: Date | undefined;
  startTime: Date | undefined;
  endTime: Date | undefined;
  formattedTime: string;
  formattedDate: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  experience: string;
  notes: string;
  paymentMethod: "online" | "in-person";
  price: number;
};

const BookingSystem = () => {
  const [currentStep, setCurrentStep] = useState<BookingStep>(1);
  const [bookingData, setBookingData] = useState<Partial<BookingData>>({});
  const [bookingId, setBookingId] = useState<number | null>(null);

  const moveToNextStep = (step: BookingStep) => {
    window.scrollTo(0, 0);
    setCurrentStep(step);
  };

  return (
    <div className="bg-light rounded-lg shadow-md border border-gray-200 overflow-hidden max-w-5xl mx-auto">
      {/* Booking Steps Progress */}
      <div className="bg-gray-100 px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between max-w-3xl mx-auto">
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 ${currentStep >= 1 ? "bg-primary text-white" : "bg-gray-300 text-gray-600"} rounded-full flex items-center justify-center font-medium`}>
              1
            </div>
            <span className={`text-xs mt-1 font-medium ${currentStep >= 1 ? "text-primary" : "text-gray-500"}`}>
              Select Service
            </span>
          </div>
          <div className="flex-1 h-1 bg-gray-300 mx-2">
            <div className={`bg-primary h-full ${currentStep >= 2 ? "w-full" : "w-0"}`}></div>
          </div>
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 ${currentStep >= 2 ? "bg-primary text-white" : "bg-gray-300 text-gray-600"} rounded-full flex items-center justify-center font-medium`}>
              2
            </div>
            <span className={`text-xs mt-1 font-medium ${currentStep >= 2 ? "text-primary" : "text-gray-500"}`}>
              Choose Date
            </span>
          </div>
          <div className="flex-1 h-1 bg-gray-300 mx-2">
            <div className={`bg-primary h-full ${currentStep >= 3 ? "w-full" : "w-0"}`}></div>
          </div>
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 ${currentStep >= 3 ? "bg-primary text-white" : "bg-gray-300 text-gray-600"} rounded-full flex items-center justify-center font-medium`}>
              3
            </div>
            <span className={`text-xs mt-1 font-medium ${currentStep >= 3 ? "text-primary" : "text-gray-500"}`}>
              Your Details
            </span>
          </div>
          <div className="flex-1 h-1 bg-gray-300 mx-2">
            <div className={`bg-primary h-full ${currentStep >= 4 ? "w-full" : "w-0"}`}></div>
          </div>
          <div className="flex flex-col items-center">
            <div className={`w-8 h-8 ${currentStep >= 4 ? "bg-primary text-white" : "bg-gray-300 text-gray-600"} rounded-full flex items-center justify-center font-medium`}>
              4
            </div>
            <span className={`text-xs mt-1 font-medium ${currentStep >= 4 ? "text-primary" : "text-gray-500"}`}>
              Payment
            </span>
          </div>
        </div>
      </div>
      
      <Separator />
      
      {/* Step Content */}
      {currentStep === 1 && (
        <ServiceSelection 
          onNext={(serviceData) => {
            setBookingData((prev) => ({ ...prev, ...serviceData }));
            moveToNextStep(2);
          }} 
        />
      )}
      
      {currentStep === 2 && (
        <DateSelection 
          onNext={(dateData) => {
            setBookingData((prev) => ({ ...prev, ...dateData }));
            moveToNextStep(3);
          }}
          onBack={() => moveToNextStep(1)}
        />
      )}
      
      {currentStep === 3 && (
        <CustomerDetails 
          onNext={(customerData) => {
            setBookingData((prev) => ({ ...prev, ...customerData }));
            moveToNextStep(4);
          }}
          onBack={() => moveToNextStep(2)}
        />
      )}
      
      {currentStep === 4 && (
        <PaymentSelection 
          bookingData={bookingData as BookingData}
          onComplete={(paymentData, id) => {
            setBookingData((prev) => ({ ...prev, ...paymentData }));
            setBookingId(id);
            moveToNextStep("confirmation");
          }}
          onBack={() => moveToNextStep(3)}
        />
      )}
      
      {currentStep === "confirmation" && (
        <BookingConfirmation 
          bookingData={bookingData as BookingData}
          bookingId={bookingId}
        />
      )}
    </div>
  );
};

export default BookingSystem;
