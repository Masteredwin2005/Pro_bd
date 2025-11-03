import { Pool } from "pg";
import dotenv from "dotenv";

dotenv.config();

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
});

pool.connect()
  .then(client => {
    console.log("✅ Conectado a la base de datos:", process.env.DB_NAME);
    client.release();
  })
  .catch(err => console.error("❌ Error de conexión:", err));
