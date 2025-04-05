import {
  LessonType,
  TimeSlot,
  Booking,
  ContactSubmission,
  Testimonial,
  InsertLessonType,
  InsertTimeSlot,
  InsertBooking,
  InsertContactSubmission,
  InsertTestimonial,
  User,
  InsertUser,
} from "@shared/schema";
import {
  add,
  format,
  startOfDay,
  endOfDay,
  isWithinInterval,
  parseISO,
} from "date-fns";

export interface IStorage {
  // User operations
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Lesson type operations
  getLessonTypes(): Promise<LessonType[]>;
  getLessonType(id: number): Promise<LessonType | undefined>;
  createLessonType(lessonType: InsertLessonType): Promise<LessonType>;

  // Time slot operations
  getTimeSlots(date?: Date): Promise<TimeSlot[]>;
  getAvailableTimeSlots(date?: Date): Promise<TimeSlot[]>;
  getTimeSlot(id: number): Promise<TimeSlot | undefined>;
  createTimeSlot(timeSlot: InsertTimeSlot): Promise<TimeSlot>;
  updateTimeSlotAvailability(
    id: number,
    isAvailable: boolean,
  ): Promise<TimeSlot | undefined>;

  // Booking operations
  getBookings(): Promise<Booking[]>;
  getBooking(id: number): Promise<Booking | undefined>;
  createBooking(booking: InsertBooking): Promise<Booking>;
  updateBookingPaymentStatus(
    id: number,
    hasPaid: boolean,
  ): Promise<Booking | undefined>;

  // Contact form operations
  getContactSubmissions(): Promise<ContactSubmission[]>;
  createContactSubmission(
    submission: InsertContactSubmission,
  ): Promise<ContactSubmission>;

  // Testimonial operations
  getTestimonials(): Promise<Testimonial[]>;
  createTestimonial(testimonial: InsertTestimonial): Promise<Testimonial>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private lessonTypes: Map<number, LessonType>;
  private timeSlots: Map<number, TimeSlot>;
  private bookings: Map<number, Booking>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private testimonials: Map<number, Testimonial>;

  private userCurrentId: number;
  private lessonTypeCurrentId: number;
  private timeSlotCurrentId: number;
  private bookingCurrentId: number;
  private contactSubmissionCurrentId: number;
  private testimonialCurrentId: number;

  constructor() {
    this.users = new Map();
    this.lessonTypes = new Map();
    this.timeSlots = new Map();
    this.bookings = new Map();
    this.contactSubmissions = new Map();
    this.testimonials = new Map();

    this.userCurrentId = 1;
    this.lessonTypeCurrentId = 1;
    this.timeSlotCurrentId = 1;
    this.bookingCurrentId = 1;
    this.contactSubmissionCurrentId = 1;
    this.testimonialCurrentId = 1;

    // Initialize with sample data
    this.initSampleData();
  }

  private initSampleData() {
    // Add lesson types
    const lessonTypes = [
      {
        name: "Beginner Lesson",
        description: "For new drivers with little to no experience",
        price: 3200, // £32.00
        duration: 60, // 1 hour
      },
      {
        name: "Refresher Lesson",
        description: "For those with some driving experience",
        price: 3200, // £32.00
        duration: 60, // 1 hour
      },
      {
        name: "Test Preparation",
        description: "Focus on test routes and maneuvers",
        price: 3500, // £35.00
        duration: 60, // 1 hour
      },
      {
        name: "Intensive Course",
        description: "Accelerated learning package",
        price: 56000, // £560.00
        duration: 1200, // 20 hours
      },
    ];

    lessonTypes.forEach((type) => this.createLessonType(type));

    // Add time slots for the next 30 days
    const today = new Date();
    for (let i = 0; i < 30; i++) {
      const date = add(today, { days: i });

      // Skip Sundays
      if (date.getDay() === 0) continue;

      // Create slots for each day (9am to 5pm)
      const times = ["09:00", "11:00", "13:00", "15:00"];
      times.forEach((time) => {
        const [hours, minutes] = time.split(":").map(Number);
        const startTime = new Date(date);
        startTime.setHours(hours, minutes, 0, 0);

        const endTime = add(startTime, { hours: 1 });

        this.createTimeSlot({
          date: startTime,
          startTime,
          endTime,
          isAvailable: true,
        });
      });
    }

    // Add testimonials
    const testimonials = [
      {
        name: "Coco Beverley Duckworth",
        date: "September 2023",
        rating: 5,
        content:
          "I have been through hundreds of driving instructors and I have finally found the right one",
      },
      {
        name: "James Wilson",
        date: "August 2023",
        rating: 5,
        content:
          "The intensive course was perfect for me. My instructor made sure I was fully prepared for my test in just two weeks. Professional service from start to finish.",
      },
      {
        name: "Emily Chen",
        date: "July 2023",
        rating: 4.5,
        content:
          "After trying another driving school without success, I switched to Calm Driving. The difference was incredible - clear explanations, structured lessons, and a relaxed atmosphere.",
      },
    ];

    testimonials.forEach((testimonial) => this.createTestimonial(testimonial));
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  // Lesson type methods
  async getLessonTypes(): Promise<LessonType[]> {
    return Array.from(this.lessonTypes.values());
  }

  async getLessonType(id: number): Promise<LessonType | undefined> {
    return this.lessonTypes.get(id);
  }

  async createLessonType(lessonType: InsertLessonType): Promise<LessonType> {
    const id = this.lessonTypeCurrentId++;
    const newLessonType: LessonType = { ...lessonType, id };
    this.lessonTypes.set(id, newLessonType);
    return newLessonType;
  }

  // Time slot methods
  async getTimeSlots(date?: Date): Promise<TimeSlot[]> {
    const slots = Array.from(this.timeSlots.values());

    if (date) {
      const dayStart = startOfDay(date);
      const dayEnd = endOfDay(date);

      return slots.filter((slot) =>
        isWithinInterval(slot.startTime, { start: dayStart, end: dayEnd }),
      );
    }

    return slots;
  }

  async getAvailableTimeSlots(date?: Date): Promise<TimeSlot[]> {
    const slots = await this.getTimeSlots(date);
    return slots.filter((slot) => slot.isAvailable);
  }

  async getTimeSlot(id: number): Promise<TimeSlot | undefined> {
    return this.timeSlots.get(id);
  }

  async createTimeSlot(timeSlot: InsertTimeSlot): Promise<TimeSlot> {
    const id = this.timeSlotCurrentId++;
    const newTimeSlot: TimeSlot = { ...timeSlot, id };
    this.timeSlots.set(id, newTimeSlot);
    return newTimeSlot;
  }

  async updateTimeSlotAvailability(
    id: number,
    isAvailable: boolean,
  ): Promise<TimeSlot | undefined> {
    const slot = this.timeSlots.get(id);

    if (slot) {
      const updatedSlot = { ...slot, isAvailable };
      this.timeSlots.set(id, updatedSlot);
      return updatedSlot;
    }

    return undefined;
  }

  // Booking methods
  async getBookings(): Promise<Booking[]> {
    return Array.from(this.bookings.values());
  }

  async getBooking(id: number): Promise<Booking | undefined> {
    return this.bookings.get(id);
  }

  async createBooking(booking: InsertBooking): Promise<Booking> {
    const id = this.bookingCurrentId++;
    const createdAt = new Date();
    const newBooking: Booking = { ...booking, id, createdAt };

    // Mark time slot as unavailable
    const matchingSlots = Array.from(this.timeSlots.values()).filter(
      (slot) =>
        slot.startTime.getTime() === booking.startTime.getTime() &&
        slot.endTime.getTime() === booking.endTime.getTime(),
    );

    matchingSlots.forEach((slot) => {
      this.updateTimeSlotAvailability(slot.id, false);
    });

    this.bookings.set(id, newBooking);
    return newBooking;
  }

  async updateBookingPaymentStatus(
    id: number,
    hasPaid: boolean,
  ): Promise<Booking | undefined> {
    const booking = this.bookings.get(id);

    if (booking) {
      const updatedBooking = { ...booking, hasPaid };
      this.bookings.set(id, updatedBooking);
      return updatedBooking;
    }

    return undefined;
  }

  // Contact form methods
  async getContactSubmissions(): Promise<ContactSubmission[]> {
    return Array.from(this.contactSubmissions.values());
  }

  async createContactSubmission(
    submission: InsertContactSubmission,
  ): Promise<ContactSubmission> {
    const id = this.contactSubmissionCurrentId++;
    const createdAt = new Date();
    const newSubmission: ContactSubmission = { ...submission, id, createdAt };
    this.contactSubmissions.set(id, newSubmission);
    return newSubmission;
  }

  // Testimonial methods
  async getTestimonials(): Promise<Testimonial[]> {
    return Array.from(this.testimonials.values());
  }

  async createTestimonial(
    testimonial: InsertTestimonial,
  ): Promise<Testimonial> {
    const id = this.testimonialCurrentId++;
    const newTestimonial: Testimonial = { ...testimonial, id };
    this.testimonials.set(id, newTestimonial);
    return newTestimonial;
  }
}

export const storage = new MemStorage();
