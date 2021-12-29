import express from 'express';

export default class Server{

    public app: express.Application;
    public port: number = Number(process.env.PORT);

    constructor() {

        this.app = express();

    }

    start(  ){

        this.app.listen( this.port, () => {
            console.log(`Server started on port ${this.port}`);
        });

    }

}