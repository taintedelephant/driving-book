import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { BookingData } from "./BookingSystem";
import { 
  CreditCard, 
  CheckCircle2,
  CreditCard as CreditCardIcon 
} from "lucide-react";

interface PaymentSelectionProps {
  bookingData: BookingData;
  onComplete: (
    data: { paymentMethod: "online" | "in-person" },
    bookingId: number
  ) => void;
  onBack: () => void;
}

const PaymentSelection = ({
  bookingData,
  onComplete,
  onBack,
}: PaymentSelectionProps) => {
  const [paymentMethod, setPaymentMethod] = useState<"online" | "in-person">("in-person");
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: (data: any) => {
      return apiRequest('POST', '/api/bookings', data);
    },
    onSuccess: (response) => {
      response.json().then(data => {
        onComplete({ paymentMethod }, data.id);
      });
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to complete your booking. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleConfirmBooking = () => {
    const formattedData = {
      lessonTypeId: bookingData.lessonTypeId,
      firstName: bookingData.firstName,
      lastName: bookingData.lastName,
      email: bookingData.email,
      phone: bookingData.phone,
      experience: bookingData.experience,
      notes: bookingData.notes,
      date: bookingData.date,
      startTime: bookingData.startTime,
      endTime: bookingData.endTime,
      paymentMethod: paymentMethod,
      hasPaid: paymentMethod === "online", // Set to true if online payment (in a real scenario)
    };

    mutation.mutate(formattedData);
  };

  // Format price
  const formatPrice = (price: number) => {
    return `£${(price / 100).toFixed(2)}`;
  };

  return (
    <div className="p-6">
      <h3 className="text-xl font-heading font-semibold mb-4">Payment Method</h3>
      
      <div className="space-y-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <h4 className="font-medium mb-2">Booking Summary</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Lesson Type:</span>
              <span className="font-medium">{bookingData.lessonTypeName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Duration:</span>
              <span className="font-medium">{bookingData.duration}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Date:</span>
              <span className="font-medium">{bookingData.formattedDate}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Time:</span>
              <span className="font-medium">{bookingData.formattedTime}</span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span className="text-primary">{formatPrice(bookingData.price)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-medium mb-3">Select Payment Method</h4>
          
          <div className="space-y-3">
            <div 
              className={`border ${paymentMethod === "online" ? "border-primary" : "border-gray-200"} rounded-lg p-4 cursor-pointer hover:border-primary transition`}
              onClick={() => setPaymentMethod("online")}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 border ${paymentMethod === "online" ? "border-primary" : "border-gray-300"} rounded-full flex items-center justify-center`}>
                  {paymentMethod === "online" && (
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  )}
                </div>
                <span className="ml-3 font-medium">Pay Online Now</span>
              </div>
              <p className="text-sm text-gray-600 mt-2 ml-8">
                Secure your booking immediately with online payment
              </p>
              
              {paymentMethod === "online" && (
                <div className="mt-4 ml-8 p-4 border border-gray-200 rounded-lg bg-gray-50">
                  <p className="text-sm text-gray-500 mb-3">
                    Online payment functionality will be implemented at a later date.
                  </p>
                  <div className="flex items-center gap-4">
                    <CreditCardIcon className="h-6 w-6 text-gray-400" />
                    <CreditCardIcon className="h-6 w-6 text-gray-400" />
                    <CreditCardIcon className="h-6 w-6 text-gray-400" />
                  </div>
                </div>
              )}
            </div>
            
            <div 
              className={`border ${paymentMethod === "in-person" ? "border-primary" : "border-gray-200"} rounded-lg p-4 cursor-pointer hover:border-primary transition`}
              onClick={() => setPaymentMethod("in-person")}
            >
              <div className="flex items-center">
                <div className={`w-5 h-5 border ${paymentMethod === "in-person" ? "border-primary" : "border-gray-300"} rounded-full flex items-center justify-center`}>
                  {paymentMethod === "in-person" && (
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  )}
                </div>
                <span className="ml-3 font-medium">Pay at Lesson</span>
              </div>
              <p className="text-sm text-gray-600 mt-2 ml-8">
                Pay your instructor directly before your lesson starts
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button 
          onClick={handleConfirmBooking}
          disabled={mutation.isPending}
          variant="secondary"
        >
          {mutation.isPending ? "Processing..." : "Confirm Booking"}
        </Button>
      </div>
    </div>
  );
};

export default PaymentSelection;
