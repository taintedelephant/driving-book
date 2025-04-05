import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { 
  insertBookingSchema, 
  insertContactSubmissionSchema 
} from "@shared/schema";
import { format } from "date-fns";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // API Routes
  app.get("/api/lesson-types", async (req, res) => {
    try {
      const lessonTypes = await storage.getLessonTypes();
      res.json(lessonTypes);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch lesson types" });
    }
  });

  app.get("/api/time-slots", async (req, res) => {
    try {
      let date: Date | undefined = undefined;
      
      if (req.query.date) {
        date = new Date(req.query.date as string);
        if (isNaN(date.getTime())) {
          return res.status(400).json({ message: "Invalid date format" });
        }
      }
      
      const timeSlots = await storage.getAvailableTimeSlots(date);
      res.json(timeSlots);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch time slots" });
    }
  });

  app.post("/api/bookings", async (req, res) => {
    try {
      // Validate the booking data
      const bookingData = insertBookingSchema.parse({
        ...req.body,
        date: new Date(req.body.date),
        startTime: new Date(req.body.startTime),
        endTime: new Date(req.body.endTime)
      });
      
      // Create the booking
      const booking = await storage.createBooking(bookingData);
      
      res.status(201).json(booking);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid booking data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ message: "Failed to create booking" });
      }
    }
  });

  app.get("/api/bookings", async (req, res) => {
    try {
      const bookings = await storage.getBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch bookings" });
    }
  });

  app.get("/api/bookings/:id", async (req, res) => {
    try {
      const bookingId = parseInt(req.params.id);
      if (isNaN(bookingId)) {
        return res.status(400).json({ message: "Invalid booking ID" });
      }
      
      const booking = await storage.getBooking(bookingId);
      if (!booking) {
        return res.status(404).json({ message: "Booking not found" });
      }
      
      res.json(booking);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch booking" });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      // Validate the submission data
      const submissionData = insertContactSubmissionSchema.parse(req.body);
      
      // Create the contact submission
      const submission = await storage.createContactSubmission(submissionData);
      
      res.status(201).json(submission);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          message: "Invalid submission data", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ message: "Failed to submit contact form" });
      }
    }
  });

  app.get("/api/testimonials", async (req, res) => {
    try {
      const testimonials = await storage.getTestimonials();
      res.json(testimonials);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch testimonials" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
