import { Entity, Column, PrimaryColumn, ManyToMany } from 'typeorm';
import { Pokemon } from './pokemon';

@Entity('evolutions')
export class PokemonEvolution {
	@PrimaryColumn()
	id: number;

	@Column("text")
	name: string;

	@ManyToMany(type => Pokemon, pokemon => pokemon.evolution)
 pokemon: Pokemon[];
}