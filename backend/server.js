import express from "express";
import cors from "cors";
import "dotenv/config";
import helmet from "helmet";
import compression from "compression";
import connectDB from "./config/mongodb.js";
import connectCloudinery from "./config/cloudinery.js";
import adminRouter from "./routes/adminRoute.js";
import { doctorRouter } from "./routes/doctorRoute.js";
import userRouter from "./routes/userRoute.js";

//app config
const app = express();
const port = process.env.PORT || 3000;
connectDB();
connectCloudinery();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
app.use(compression());
app.use(cors(
  {
    origin: "*",
  }
));

//api end points
app.use("/api/admin", adminRouter);
app.use("/api/doctor", doctorRouter);
app.use("/api/user", userRouter);
// localhost:4000/api/admin/add-doctor
app.get("/", (req, res) => {
  res.send("hello");
});

// server listener
app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
