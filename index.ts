import Server from './classes/server';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import 'dotenv/config';

import fileUpload from 'express-fileupload';

import userRoutes from './routes/usuario';
import postRoutes from './routes/post';

const server = new Server();

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


