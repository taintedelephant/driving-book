import { useQuery } from "@tanstack/react-query";
import { User } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { Testimonial } from "@shared/schema";

const Testimonials = () => {
  const { data: testimonials, isLoading } = useQuery<Testimonial[]>({
    queryKey: ['/api/testimonials'],
  });

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold text-gray-900">Customer Testimonials</h2>
          <p className="mt-2 text-lg text-gray-600">What students say about their learning experience</p>
        </div>
        
        {isLoading ? (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-full mb-2" />
              <Skeleton className="h-4 w-3/4 mb-4" />
              <div className="flex items-center">
                <Skeleton className="h-10 w-10 rounded-full" />
                <div className="ml-3">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-32 mt-1" />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="max-w-2xl mx-auto">
            {testimonials && Array.isArray(testimonials) && testimonials.length > 0 && (
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <p className="text-gray-600 mb-6 text-lg italic">"{testimonials[0].content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gray-200 rounded-full overflow-hidden flex items-center justify-center">
                    <User className="h-6 w-6 text-gray-400" />
                  </div>
                  <div className="ml-4">
                    <h4 className="font-medium text-lg">{testimonials[0].name}</h4>
                    <p className="text-gray-500">Passed in {testimonials[0].date}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Testimonials;
