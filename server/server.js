// Server.js
const express = require("express");
const app = express();

const helmet = require("helmet");
app.use(helmet());

const cors = require("cors");
app.use(cors());

app.use(express.json());

const userRouter = require("./routes/api/users");
app.use("/api/users", userRouter);

const connectDatabase = require("./config/connectDatabase");
connectDatabase();

const { port } = require("./config");
app.listen(port || process.env.PORT, () => console.log("Server Listening..."));
