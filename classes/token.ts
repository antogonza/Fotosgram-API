import jwt from 'jsonwebtoken';

export default class Token {

    private static seed: string = String(process.env.JWT_SECRET);
    private static caducidad: string = String(process.env.JWT_LIFETIME);

    constructor() { }

    static getJwtToken( payload: any ): string {
    
        return jwt.sign({
            usuario: payload
        }, this.seed, {expiresIn: this.caducidad});

    }

    static comprobarToken( userToken: string) {

        return new Promise( (resolve, reject) => {
            
            jwt.verify(userToken, this.seed, (err, decoded) => {
                if (err) {
                    reject();
                } else {
                    resolve( decoded );
                }
            })

        })

    }

}