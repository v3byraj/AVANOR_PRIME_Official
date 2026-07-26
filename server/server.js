import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import innovationRoutes from "./routes/innovationRoutes.js";

dotenv.config();

connectDB();

const app = express();
const allowedOrigins = [
  "http://localhost:5173",
  "https://avanorprime.netlify.app",
  "https://www.avanorprime.netlify.app",
  "https://avanor-prime-official.onrender.com",
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/innovations", innovationRoutes);
app.use("/innovations", innovationRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Server Running...",
    routes: ["/api/innovations", "/innovations"],
  });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});