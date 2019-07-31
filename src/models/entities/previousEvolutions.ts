import { Entity, Column, PrimaryColumn, ManyToMany } from 'typeorm';
import { Pokemon } from './pokemon';

@Entity('previousEvolutions')
export class PokemonPreviousEvolution {
	@PrimaryColumn()
	id: number;

	@Column("text")
	name: string;

	@ManyToMany(type => Pokemon, pokemon => pokemon['previousEvolution'])
	pokemon: Pokemon[];
}