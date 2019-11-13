"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es requerido']
    },
    direccion: {
        type: String,
        required: [true, 'La direccion es requerida']
    },
    email: {
        type: String,
        required: [true, 'El email es requerido']
    },
    password: {
        type: String,
        required: [true, 'El password es requerido']
    },
    foto: {
        type: String,
        default: 'default.png'
    },
});
exports.User = mongoose_1.model('User', userSchema);
