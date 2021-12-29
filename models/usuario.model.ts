import {Schema, model, Document} from 'mongoose';
import bcrypt from 'bcrypt';

const usuarioSchema = new Schema({
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

usuarioSchema.method('compararPassword', function(password: string = ' '): boolean {
    if ( bcrypt.compareSync( password, this.password ) ){
        return true;
    } else {
        return false;
    }
})

interface IUsuario extends Document {
    nombre: string;
    username: string;
    email: string;
    password: string;
    avatar: string;

    compararPassword(password: string): boolean;
}

export const Usuario = model<IUsuario>('Usuario', usuarioSchema);