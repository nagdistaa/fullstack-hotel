import { clerkMiddleware } from "@clerk/express";
import "dotenv/config";
import express from "express";
import connectDB from "./configs/db.js";
import clerkWebhooks from "./controllers/clerkwebhooks.controller.js";
await connectDB();

// ! VARIABLES
const app = express();
const port = process.env.PORT || 5001;
// ! MIDDLEWARE
app.use(express.json());
app.use(clerkMiddleware());
// ! ROUTE
app.use("/api/clerk", clerkWebhooks);
app.get("/", (req, res) => res.send("API"));

// ! SERVER
app.listen(port, () => {
  console.log(`Server Starting on port :${port}, http://localhost:${port}`);
});
