"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = __importDefault(require("express"));
const controllers_1 = require("./controllers");
exports.router = express_1.default.Router();
// Ruta para obtener datos (GET)
exports.router.get("/datos", controllers_1.getData);
// Ruta para agregar datos (POST)
exports.router.post("/datos", controllers_1.postData);
