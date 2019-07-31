import * as fs from "fs-extra";
import * as path from 'path';
import { createConnection } from "typeorm";
import { Pokemon } from '../models/entities/pokemon';
import { PokemonEvolution } from "../models/entities/evolutions";
import { PokemonPreviousEvolution } from "../models/entities/previousEvolutions";
import { Attacks } from "../models/entities/attacks";


export class populateDB {

	async readJson(folder: string) {
    return await createConnection({
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
    }).then(async (connection) => {
      console.log('Database connection established');
      // Create new instance
      await fs.readJSON(path.join(folder, "pokemons.json")).then(async data => {
        for(var i=0; i<data.length; i++) {
          const pokemon = new Pokemon();
          const attacks_collection: Attacks[] = [];
          const evolution_collection: PokemonEvolution[] = [];
          const previous_evolution_collection: PokemonPreviousEvolution[] = [];
          pokemon.id = data[i].id;
          pokemon.name = data[i].name;
          pokemon.classification = data[i].classification;
          pokemon.types = data[i].types;
          pokemon.weakness = data[i].weaknesses;
          pokemon.resistant = data[i].resistant;
          pokemon.minWeight = data[i].weight.minimum;
          pokemon.maxWeight = data[i].weight.maximum;
          pokemon.minHeight = data[i].height.minimum;
          pokemon.maxHeight = data[i].height.maximum;
          pokemon.maxCP = data[i].maxCP;
          pokemon.maxHP = data[i].maxHP;
          pokemon.fleeRate = data[i].fleeRate;

          if (data[i].hasOwnProperty('evolutionRequirements')) {
            pokemon.evolutionReqName = data[i]['evolutionRequirements'].name;
            pokemon.evolutionReqAmount = data[i]['evolutionRequirements'].amount;
          } else {
            pokemon.evolutionReqAmount = null;
            pokemon.evolutionReqName = null;
          }

          if (data[i].hasOwnProperty('Pokémon Class')) {
            pokemon['Pokémon Class'] = data[i]['Pokémon Class'];
          } else {
            pokemon['Pokémon Class'] = null;
          }

          if (data[i].hasOwnProperty('MYTHIC')) {
            pokemon['MYTHIC'] = data[i]['MYTHIC'];
          } else {
            pokemon['MYTHIC'] = null;
          }

          if (data[i].hasOwnProperty('LEGENDARY')) {
            pokemon['LEGENDARY'] = data[i]['LEGENDARY'];
          } else {
            pokemon['LEGENDARY'] = null;
          }

          if (data[i].hasOwnProperty('evolutions') && data[i].evolutions.length > 0) {
            for(var j=0; j<data[i].evolutions.length; j++) {
              const evolutions = new PokemonEvolution();
              evolutions.id = data[i].evolutions[j].id;
              evolutions.name = data[i].evolutions[j].name;
              evolution_collection.push(evolutions);
            }
          }
          if (data[i].attacks.hasOwnProperty('fast') && data[i].attacks.fast.length > 0) {
            for(var k=0; k<data[i].attacks.fast.length; k++) {
              const attacks = new Attacks();
              attacks.category = 'fast';
              attacks.name = data[i].attacks.fast[k].name;
              attacks.type = data[i].attacks.fast[k].type;
              attacks.damage = data[i].attacks.fast[k].damage;
              attacks_collection.push(attacks);
            }
          }
          if (data[i].attacks.hasOwnProperty('special') && data[i].attacks.special.length > 0) {
            for(var l=0; l<data[i].attacks.special.length; l++) {
              const attacks1 = new Attacks();
              attacks1.category = 'special';
              attacks1.name = data[i].attacks.special[l].name;
              attacks1.type = data[i].attacks.special[l].type;
              attacks1.damage = data[i].attacks.special[l].damage;
              attacks_collection.push(attacks1);
            }
          }
          
          if (data[i].hasOwnProperty('Previous evolution(s)') && data[i]['Previous evolution(s)'].length > 0) {
            for(var m=0; m<data[i]['Previous evolution(s)'].length; m++) {
              const previous_evolutions = new PokemonPreviousEvolution();
              previous_evolutions.id = data[i]['Previous evolution(s)'][m].id;
              previous_evolutions.name = data[i]['Previous evolution(s)'][m].name;
              previous_evolution_collection.push(previous_evolutions);
            }
          }
          pokemon.attacks = attacks_collection;
          pokemon.evolution = evolution_collection;
          pokemon['previousEvolution'] = previous_evolution_collection;
          //Persist to database
          let pokemonRegistry = connection.getRepository(Pokemon);

          await pokemonRegistry
            .save(pokemon)
            .then(() => {
              console.log("pokemon and relation data is saved");
            });
        }
      }).catch(err => {
        console.log(err);
      });
    });
  }
}