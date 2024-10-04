// backend/server.js
const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 8080;

// Middleware
app.use(cors()); // Enable CORS
app.use(helmet()); // Use Helmet for security headers

// Custom security headers
app.use((req, res, next) => {
  res.setHeader("Content-Security-Policy", "default-src 'self'");
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");
  res.setHeader(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload"
  );
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("Cross-Origin-Resource-Policy", "same-origin");
  next();
});

// Sample route
app.get("/api", (req, res) => {
  res.json({ message: "Hello from Express!" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on https://localhost:${PORT}`);
});
