"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = __importDefault(require("./classes/server"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
require("dotenv/config");
const cors_1 = __importDefault(require("cors"));
const express_fileupload_1 = __importDefault(require("express-fileupload"));
const usuario_1 = __importDefault(require("./routes/usuario"));
const post_1 = __importDefault(require("./routes/post"));
const server = new server_1.default();
// Configurar Cors
server.app.use((0, cors_1.default)());
// Body parser
server.app.use(body_parser_1.default.urlencoded({ extended: true }));
server.app.use(body_parser_1.default.json());
// FileUpload 
server.app.use((0, express_fileupload_1.default)());
// Rutas
server.app.use('/user', usuario_1.default);
server.app.use('/post', post_1.default);
// Conectar DB
mongoose_1.default.connect(String(process.env.DB_URI), (err) => {
    if (err)
        throw err;
    console.log('Base de datos ONLINE');
    server.start();
});
