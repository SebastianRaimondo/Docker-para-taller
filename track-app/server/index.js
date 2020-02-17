const express = require("express");
const cors = require("cors");
const app = express();
const morgan = require("morgan");
const resStatus = require("express-res-status");

const { mongoose } = require("./database");

// Settings
app.set("port", process.env.PORT || 3001);

// Middlewares
app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());
app.use(morgan("dev"));
app.use(resStatus());

// Routes
app.use("/api/alumnos", require("./routes/alu.routes"));
app.use("/api/profesores", require("./routes/prof.routes"));
app.use("/api/cursos", require("./routes/curso.routes"));
app.use("/api/asignaciones", require("./routes/asignacion.routes"));

// starting the server
app.listen(app.get("port"), () => {
  console.log(`server on port ${app.get("port")}`);
});
