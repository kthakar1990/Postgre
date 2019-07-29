import { Entity, Column, JoinColumn, PrimaryColumn, ManyToOne } from 'typeorm';
import { Pokemon } from './pokemon';

@Entity('previousEvolutions')
export class PokemonPreviousEvolution {
	@PrimaryColumn()
	id: number;

	@Column("text")
	name: string;

	@ManyToOne(type => Pokemon, pokemon => pokemon.previousEvolution)
	@JoinColumn()
	pokemon: Pokemon;
}