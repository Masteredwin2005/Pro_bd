"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postData = exports.getData = void 0;
const db_1 = require("./db");
// Controlador para obtener datos
const getData = async (req, res) => {
    try {
        const result = await db_1.pool.query("SELECT * FROM usuarios");
        res.json(result.rows);
    }
    catch (error) {
        res.status(500).json({ message: "Error obteniendo datos", error });
    }
};
exports.getData = getData;
// Controlador para insertar datos
const postData = async (req, res) => {
    try {
        const { nombre, correo } = req.body;
        await db_1.pool.query("INSERT INTO usuarios (nombre, correo) VALUES ($1, $2)", [nombre, correo]);
        res.json({ message: "Datos insertados correctamente" });
    }
    catch (error) {
        res.status(500).json({ message: "Error insertando datos", error });
    }
};
exports.postData = postData;
