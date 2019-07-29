import { Entity, Column, JoinColumn, PrimaryColumn, ManyToOne } from 'typeorm';
import { Pokemon } from './pokemon';

@Entity('evolutions')
export class PokemonEvolution {
	@PrimaryColumn()
	id: number;

	@Column("text")
	name: string;

	@ManyToOne(type => Pokemon, pokemon => pokemon.evolution)
	@JoinColumn()
	pokemon: Pokemon;
}