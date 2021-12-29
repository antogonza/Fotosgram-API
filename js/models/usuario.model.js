"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuario = void 0;
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const usuarioSchema = new mongoose_1.Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es necesario']
    },
    username: {
        type: String,
        required: [true, 'El nombre de usuario es necesario'],
        unique: true,
        minValue: [5, 'El nombre de usuario debe tener al menos 5 caracteres']
    },
    email: {
        type: String,
        unique: true,
        required: [true, 'El correo es necesario']
    },
    password: {
        type: String,
        required: [true, 'La contraseña es necesaria'],
        minValue: [8, 'La contraseña debe tener al menos 8 caracteres']
    },
    avatar: {
        type: String,
        required: false,
        default: 'av-1.png'
    },
});
usuarioSchema.method('compararPassword', function (password = ' ') {
    if (bcrypt_1.default.compareSync(password, this.password)) {
        return true;
    }
    else {
        return false;
    }
});
exports.Usuario = (0, mongoose_1.model)('Usuario', usuarioSchema);
