import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";

interface DateSelectionProps {
  onNext: (data: {
    date: Date;
    startTime: Date;
    endTime: Date;
    formattedDate: string;
    formattedTime: string;
  }) => void;
  onBack: () => void;
}

const DateSelection = ({ onNext, onBack }: DateSelectionProps) => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<any>(null);

  const { data: timeSlots, isLoading, refetch } = useQuery({
    queryKey: ['/api/time-slots', selectedDate ? format(selectedDate, 'yyyy-MM-dd') : null],
    enabled: !!selectedDate,
  });

  useEffect(() => {
    if (selectedDate) {
      refetch();
    }
  }, [selectedDate, refetch]);

  const handleDateChange = (date: Date | undefined) => {
    setSelectedDate(date);
    setSelectedTimeSlot(null);
  };

  const handleContinue = () => {
    if (selectedDate && selectedTimeSlot) {
      onNext({
        date: selectedDate,
        startTime: new Date(selectedTimeSlot.startTime),
        endTime: new Date(selectedTimeSlot.endTime),
        formattedDate: format(selectedDate, 'MMMM d, yyyy'),
        formattedTime: format(new Date(selectedTimeSlot.startTime), 'h:mm a'),
      });
    }
  };

  const availableSlots = timeSlots?.filter((slot: any) => slot.isAvailable) || [];
  const hasSlots = availableSlots.length > 0;

  return (
    <div className="p-6">
      <h3 className="text-xl font-heading font-semibold mb-4">Select Date & Time</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Calendar */}
        <div>
          <h4 className="font-medium mb-3">Choose a date</h4>
          <div className="border rounded-md p-2">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateChange}
              className="rounded-md border"
              disabled={{ before: new Date() }}
            />
          </div>
        </div>
        
        {/* Time slots */}
        <div>
          <h4 className="font-medium mb-3">
            {selectedDate 
              ? `Available times for ${format(selectedDate, 'MMMM d, yyyy')}` 
              : 'Please select a date first'}
          </h4>
          
          {selectedDate && isLoading ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
              {[1, 2, 3, 4].map((i) => (
                <Skeleton key={i} className="h-10 w-full" />
              ))}
            </div>
          ) : selectedDate && !hasSlots ? (
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-center">
              <p className="text-gray-500">No available time slots for this date.</p>
              <p className="text-sm text-gray-400 mt-1">Please select another date.</p>
            </div>
          ) : selectedDate ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
              {availableSlots.map((slot: any) => (
                <Button
                  key={slot.id}
                  variant={selectedTimeSlot?.id === slot.id ? "default" : "outline"}
                  onClick={() => setSelectedTimeSlot(slot)}
                  className="justify-center"
                >
                  {format(new Date(slot.startTime), 'h:mm a')}
                </Button>
              ))}
            </div>
          ) : (
            <div className="bg-gray-50 p-4 rounded-md border border-gray-200 text-center">
              <p className="text-gray-500">Please select a date to see available time slots.</p>
            </div>
          )}
        </div>
      </div>
      
      <div className="mt-8 flex justify-between">
        <Button variant="outline" onClick={onBack}>
          Back
        </Button>
        <Button 
          onClick={handleContinue}
          disabled={!selectedDate || !selectedTimeSlot}
        >
          Continue to Your Details
        </Button>
      </div>
    </div>
  );
};

export default DateSelection;
