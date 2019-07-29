import express from 'express';
import compression from 'compression';  // compresses requests
import session from 'express-session';
import bodyParser from 'body-parser';
import lusca from 'lusca';
import dotenv from 'dotenv';
import flash from 'express-flash';
import expressValidator from 'express-validator';
import "reflect-metadata"; //we need to import this once and once only

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: any) {
    this.app = express();
    this.initializeMiddlewares();
    this.port = 3000;
    this.initializeControllers(controllers);
  }

  private initializeControllers(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router);
    });
  }

  private initializeMiddlewares() {
    // Load environment variables from .env file, where API keys and passwords are configured
    dotenv.config({ path: '.env.example' });

    // Express configuration
    this.app.use(compression());
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(expressValidator());
    this.app.use(session({
      resave: true,
      saveUninitialized: true,
      secret: 'happy cats'
    }));
    this.app.use(flash());
    this.app.use(lusca.xframe('SAMEORIGIN'));
    this.app.use(lusca.xssProtection(true));
  }
  
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;