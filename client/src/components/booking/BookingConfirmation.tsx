import { Link } from "wouter";
import { BookingData } from "./BookingSystem";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Printer } from "lucide-react";

interface BookingConfirmationProps {
  bookingData: BookingData;
  bookingId: number | null;
}

const BookingConfirmation = ({ bookingData, bookingId }: BookingConfirmationProps) => {
  // Format price
  const formatPrice = (price: number) => {
    return `£${(price / 100).toFixed(2)}`;
  };

  const printConfirmation = () => {
    window.print();
  };

  return (
    <div className="p-6">
      <div className="text-center py-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Booking Confirmed!</h3>
        <p className="text-gray-600 mb-6">Your driving lesson has been successfully booked.</p>
        
        <div className="max-w-md mx-auto bg-gray-50 p-4 rounded-lg border border-gray-200 text-left mb-6">
          <h4 className="font-medium mb-2">Booking Details</h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Booking Reference:</span>
              <span className="font-medium">#{bookingId}</span>
            </div>
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
            <div className="flex justify-between">
              <span className="text-gray-600">Payment Method:</span>
              <span className="font-medium">
                {bookingData.paymentMethod === "online" ? "Online Payment" : "Pay at Lesson"}
              </span>
            </div>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <div className="flex justify-between font-bold">
                <span>Total:</span>
                <span className="text-primary">{formatPrice(bookingData.price)}</span>
              </div>
            </div>
          </div>
        </div>
        
        <p className="text-gray-600 mb-6">
          We've sent a confirmation email to <span className="font-medium">{bookingData.email}</span> with all the details.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-3">
          <Link href="/">
            <a className="bg-primary text-white px-6 py-2 rounded font-medium hover:bg-opacity-90 transition inline-flex items-center justify-center">
              Return to Homepage
            </a>
          </Link>
          <Button 
            variant="outline" 
            onClick={printConfirmation}
            className="inline-flex items-center gap-2"
          >
            <Printer className="h-4 w-4" />
            Print Confirmation
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookingConfirmation;
