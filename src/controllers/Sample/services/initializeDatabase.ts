const path = require('path');
import { createConnection } from 'typeorm';
import { Attacks } from '../../../models/entities/attacks';
import { PokemonEvolution } from '../../../models/entities/evolutions';
import { PokemonPreviousEvolution } from '../../../models/entities/previousEvolutions';
import { Pokemon } from '../../../models/entities/pokemon';


export const databaseInitializer = async () => {

    return await createConnection(
      {
        type     : 'postgres',
        host     : '0.0.0.0',
        port     : 5432,
        username : 'kandarp',
        password : '',
        database : 'pokemons',
        entities: [
          Pokemon,
          PokemonEvolution,
          PokemonPreviousEvolution,
          Attacks
        ],
        logging: ['query', 'error'],
        synchronize: true,
    }).then((...args) => {
        console.log('Database connection established');
    });

};