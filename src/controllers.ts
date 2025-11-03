import { Request, Response } from "express";
import { pool } from "./db";

// Obtener todas las mascotas
export const getData = async (req: Request, res: Response) => {
  try {
    const result = await pool.query("SELECT * FROM animales ORDER BY id DESC");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ message: "Error obteniendo datos", error });
  }
};

// Insertar una mascota
export const postData = async (req: Request, res: Response) => {
  try {
    const { nombre, especie, edad, propietario, telefono } = req.body;
    await pool.query(
      "INSERT INTO animales (nombre, especie, edad, propietario, telefono) VALUES ($1, $2, $3, $4, $5)",
      [nombre, especie, edad, propietario, telefono]
    );
    res.json({ message: "Mascota registrada correctamente" });
  } catch (error) {
    res.status(500).json({ message: "Error insertando datos", error });
  }
};
