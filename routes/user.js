"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const bcrypt_1 = __importDefault(require("bcrypt"));
const userRoutes = express_1.Router();
userRoutes.post('/create', (req, res) => {
    const data = req.body;
    const user = {
        nombre: data.nombre,
        email: data.email,
        password: bcrypt_1.default.hashSync(data.password, 10),
        direccion: data.direccion,
    };
    res.json({
        ok: true,
        mensaje: 'Todo esta bien'
    });
});
exports.default = userRoutes;
