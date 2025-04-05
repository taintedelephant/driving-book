import { useState } from "react";
import BookingSystem from "@/components/booking/BookingSystem";
import Head from "@/components/layout/Head";

const BookingPage = () => {
  return (
    <>
      <Head 
        title="Book Your Driving Lesson - Calm Driving School" 
        description="Book your driving lesson online with Calm Driving School. Choose your preferred lesson type, date, time and payment method."
      />
      
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold text-gray-900">Book Your Driving Lesson</h1>
          </div>
          
          <BookingSystem />
        </div>
      </section>
    </>
  );
};

export default BookingPage;
