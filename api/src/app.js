const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routerUser = require("./routes/users.routes");
const routerProperty = require("./routes/property.routes");
const routerResend = require("./routes/resend.routes");
const routerSearch = require("./routes/search.routes");
const routerCloudinary = require("./routes/cloudinary.routes");
const routerFirebase = require("./routes/firebase.routes");


//Rutas

const app = express();

// Habilitar CORS usando el middleware 'cors'
app.use(cors());

// Middleware para configurar los encabezados CORS
/* app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://inmobiliaria-client.vercel.app"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});
 */
//Middlewares
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.use("/users", routerUser);
app.use("/properties", routerProperty);
app.use("/resend", routerResend);
app.use("/search", routerSearch);
app.use("/cloudinary", routerCloudinary);
app.use("/firebase", routerFirebase);


module.exports = app;
