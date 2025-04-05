import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import Head from "@/components/layout/Head";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { CheckCircle2, XCircle, Search, Calendar, Users } from "lucide-react";

const AdminPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  
  const { data: bookings, isLoading } = useQuery({
    queryKey: ['/api/bookings'],
  });
  
  const { data: lessonTypes } = useQuery({
    queryKey: ['/api/lesson-types'],
  });

  // Format price
  const formatPrice = (price: number) => {
    return `£${(price / 100).toFixed(2)}`;
  };

  // Format date
  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'MMM d, yyyy');
  };

  // Format time
  const formatTime = (timeString: string) => {
    return format(new Date(timeString), 'h:mm a');
  };

  // Filter bookings based on search term
  const filteredBookings = searchTerm 
    ? bookings?.filter((booking: any) => 
        `${booking.firstName} ${booking.lastName}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        booking.phone.includes(searchTerm)
      )
    : bookings;

  // Get booking counts by status
  const getTotalBookings = () => filteredBookings?.length || 0;
  const getPendingBookings = () => filteredBookings?.filter((b: any) => !b.hasPaid).length || 0;
  const getPaidBookings = () => filteredBookings?.filter((b: any) => b.hasPaid).length || 0;

  // Get lesson type name by ID
  const getLessonTypeName = (id: number) => {
    const lessonType = lessonTypes?.find((type: any) => type.id === id);
    return lessonType ? lessonType.name : 'Unknown';
  };

  return (
    <>
      <Head 
        title="Admin Dashboard - Calm Driving School" 
        description="Admin dashboard for Calm Driving School. Manage bookings, view customer information, and track payments."
      />
      
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-heading font-bold text-gray-900 mb-6">Admin Dashboard</h1>
          
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Total Bookings</CardTitle>
                <Calendar className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isLoading ? (
                    <Skeleton className="h-8 w-16" />
                  ) : (
                    getTotalBookings()
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  All time bookings
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Pending Payments</CardTitle>
                <XCircle className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isLoading ? (
                    <Skeleton className="h-8 w-16" />
                  ) : (
                    getPendingBookings()
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Bookings awaiting payment
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-sm font-medium">Paid Bookings</CardTitle>
                <CheckCircle2 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {isLoading ? (
                    <Skeleton className="h-8 w-16" />
                  ) : (
                    getPaidBookings()
                  )}
                </div>
                <p className="text-xs text-muted-foreground">
                  Completed payments
                </p>
              </CardContent>
            </Card>
          </div>
          
          <Tabs defaultValue="bookings">
            <TabsList className="mb-6">
              <TabsTrigger value="bookings">Bookings</TabsTrigger>
              <TabsTrigger value="customers">Customers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="bookings">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle>Booking Management</CardTitle>
                      <CardDescription>View and manage all bookings</CardDescription>
                    </div>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search bookings..."
                        className="pl-8 w-full md:w-[300px]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="space-y-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex gap-4">
                          <Skeleton className="h-10 w-full" />
                        </div>
                      ))}
                    </div>
                  ) : filteredBookings?.length > 0 ? (
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Lesson Type</TableHead>
                            <TableHead>Date & Time</TableHead>
                            <TableHead>Payment</TableHead>
                            <TableHead>Price</TableHead>
                            <TableHead>Status</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {filteredBookings?.map((booking: any) => (
                            <TableRow key={booking.id}>
                              <TableCell>
                                <div>
                                  <div className="font-medium">{`${booking.firstName} ${booking.lastName}`}</div>
                                  <div className="text-sm text-muted-foreground">{booking.email}</div>
                                </div>
                              </TableCell>
                              <TableCell>{getLessonTypeName(booking.lessonTypeId)}</TableCell>
                              <TableCell>
                                <div>{formatDate(booking.date)}</div>
                                <div className="text-sm text-muted-foreground">{formatTime(booking.startTime)}</div>
                              </TableCell>
                              <TableCell>{booking.paymentMethod === 'online' ? 'Online' : 'In-person'}</TableCell>
                              <TableCell>
                                {/* Use the lesson type ID to get the price */}
                                {lessonTypes && formatPrice(lessonTypes.find((type: any) => type.id === booking.lessonTypeId)?.price || 0)}
                              </TableCell>
                              <TableCell>
                                {booking.hasPaid ? (
                                  <Badge variant="default" className="bg-green-500">Paid</Badge>
                                ) : (
                                  <Badge variant="outline">Pending</Badge>
                                )}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium">No bookings found</h3>
                      <p className="text-muted-foreground">
                        {searchTerm 
                          ? "No bookings match your search criteria." 
                          : "There are no bookings in the system yet."}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
            
            <TabsContent value="customers">
              <Card>
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle>Customer Management</CardTitle>
                      <CardDescription>View and manage customer information</CardDescription>
                    </div>
                    <div className="relative">
                      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search customers..."
                        className="pl-8 w-full md:w-[300px]"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                      />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {isLoading ? (
                    <div className="space-y-2">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <div key={i} className="flex gap-4">
                          <Skeleton className="h-10 w-full" />
                        </div>
                      ))}
                    </div>
                  ) : filteredBookings?.length > 0 ? (
                    <div className="rounded-md border">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Customer</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone</TableHead>
                            <TableHead>Experience</TableHead>
                            <TableHead>Bookings</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {/* Unique customers based on email */}
                          {Array.from(new Map(filteredBookings.map((item: any) => 
                            [item.email, item])).values()).map((customer: any) => (
                            <TableRow key={customer.id}>
                              <TableCell>
                                <div className="font-medium">{`${customer.firstName} ${customer.lastName}`}</div>
                              </TableCell>
                              <TableCell>{customer.email}</TableCell>
                              <TableCell>{customer.phone}</TableCell>
                              <TableCell>{customer.experience || 'Not specified'}</TableCell>
                              <TableCell>
                                {filteredBookings.filter((b: any) => b.email === customer.email).length}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  ) : (
                    <div className="text-center py-6">
                      <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                      <h3 className="text-lg font-medium">No customers found</h3>
                      <p className="text-muted-foreground">
                        {searchTerm 
                          ? "No customers match your search criteria." 
                          : "There are no customers in the system yet."}
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default AdminPage;
