const path = require('path');
import { createConnection } from 'typeorm';


export const databaseInitializer = async () => {

    return await createConnection(
      {
        type     : 'postgres',
        host     : '0.0.0.0',
        port     : 5432,
        username : 'kandarp',
        password : '',
        database : 'pokemons',
        entities: [path.join('src/model', 'entities')],
        logging: ['query', 'error'],
        synchronize: true,
    }).then((...args) => {
        console.log('Database connection established');
    });

};