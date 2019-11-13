"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const rutasUsuario = express_1.Router();
rutasUsuario.get('/prueba', (req, res) => {
    res.json({
        ok: true,
        mensaje: 'Todo esta bien'
    });
});
exports.default = rutasUsuario;
