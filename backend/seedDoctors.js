import mongoose from "mongoose";
import dotenv from "dotenv";
import doctorModel from "./models/doctorModel.js"; // adjust the path if needed
import bcrypt from "bcrypt";

// Load environment variables
dotenv.config();

// Connect to MongoDB
await mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const doctors = [
  {
    name: "Dr. Aisha Verma",
    email: "aisha.verma@example.com",
    password: await bcrypt.hash("password123", 10),
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    speciality: "Cardiologist",
    degree: "MBBS, MD (Cardiology)",
    experience: "10 years",
    about: "Experienced cardiologist with a decade of work in heart care.",
    available: true,
    fees: 500,
    address: {
      street: "123 Heartbeat Lane",
      city: "Mumbai",
      state: "Maharashtra",
      zip: "400001",
    },
    date: Date.now(),
    slots_booked: {},
  },
  {
    name: "Dr. Rohan Singh",
    email: "rohan.singh@example.com",
    password: await bcrypt.hash("password456", 10),
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    speciality: "Dermatologist",
    degree: "MBBS, MD (Dermatology)",
    experience: "7 years",
    about: "Skin care specialist with extensive clinical experience.",
    available: false,
    fees: 400,
    address: {
      street: "56 SkinCare Ave",
      city: "Delhi",
      state: "Delhi",
      zip: "110001",
    },
    date: Date.now(),
    slots_booked: {},
  },
  // Add more dummy entries if needed
];

const seedDoctors = async () => {
  try {
    // await doctorModel.deleteMany();
    await doctorModel.insertMany(doctors);
    console.log("Doctor data seeded!");
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

seedDoctors();
