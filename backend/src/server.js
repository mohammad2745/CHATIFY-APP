const express = require("express");
const dotenv = require("dotenv");
const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

const authRoutes = require("./routes/auth.routes");
const messageRoutes = require("./routes/message.routes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

if (cluster.isMaster) {
  console.log("Master process is running...");

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  // Optional: Restart worker if it crashes
  cluster.on("exit", (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Restarting...`);
    cluster.fork();
  });
} else {
  app.get("/", (req, res) => {
    res.send("Hello World from Express");
  });

  // Start server
  app.listen(PORT, () => {
    console.log(`Worker ${process.pid} listening on port ${PORT}`);
  });
}
