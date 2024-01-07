const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routerUser = require("./routes/users.routes");
const routerProperty = require("./routes/property.routes");
const routerResend = require("./routes/resend.routes");
const routerSearch = require("./routes/search.routes");
const routerCloudinary = require("./routes/cloudinary.routes");

//Rutas

const app = express();

// Middleware para configurar los encabezados CORS
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://inmobiliaria-client.vercel.app"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

//Middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

// Routes
app.use("/users", routerUser);
app.use("/properties", routerProperty);
app.use("/resend", routerResend);
app.use("/search", routerSearch);
app.use("/cloudinary", routerCloudinary);

module.exports = app;
