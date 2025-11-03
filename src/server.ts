import express from "express";
import cors from "cors";
import path from "path";
import { router } from "./routes";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ruta de archivos estáticos (carpeta public)
app.use(express.static(path.join(__dirname, "./public")));

// Ruta principal (cargar index.html)
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

// Rutas API
app.use("/api", router);

// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
