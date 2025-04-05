import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import LessonsPage from "@/pages/lessons";
import BecomeInstructorPage from "@/pages/become-instructor";
import ContactPage from "@/pages/contact";
import BookingPage from "@/pages/booking";
import AdminPage from "@/pages/admin";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/lessons" component={LessonsPage} />
            <Route path="/become-instructor" component={BecomeInstructorPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/booking" component={BookingPage} />
            <Route path="/admin" component={AdminPage} />
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
