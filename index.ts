import Server from './classes/server';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import 'dotenv/config';

import cors from 'cors';

import fileUpload from 'express-fileupload';

import userRoutes from './routes/usuario';
import postRoutes from './routes/post';
import { Router } from 'express';

const server = new Server();

// Configurar Cors
server.app.use( cors() )

// Body parser
server.app.use( bodyParser.urlencoded({ extended: true }) )
server.app.use( bodyParser.json() );

// FileUpload 
server.app.use( fileUpload() );

// Rutas
server.app.use('/user', userRoutes)
server.app.use('/post', postRoutes)

// Conectar DB
mongoose.connect(String(process.env.DB_URI), (err) => { 
    if (err) throw err;
    console.log('Base de datos ONLINE');
    server.start();
});

Router().get('/', (req, res) => {
    res.json({
        ok: true,
        message: 'Todo OK'
    });
});


