import { Entity, PrimaryColumn, Column, OneToMany } from 'typeorm';
import { PokemonEvolution } from './evolutions';
import { PokemonPreviousEvolution } from './previousEvolutions';
import { attacks } from './attacks';

@Entity('pokemon')
export class Pokemon {
	@PrimaryColumn()
	id: number;

	@Column("text")
	name: string;

	@Column("text")
	classification: string;

	@Column("text[]")
	types: string;

	@Column("text[]")
	resistant: string;

	@Column("text[]")
	weakness: string;

	@Column("float4")
	fleeRate: number;

 	@Column("text")
 	minHeight: string;

 	@Column("text")
 	maxHeight: string;

 	@Column("int")
 	maxCP: number;

 	@Column("int")
 	maxHP: number;

	@OneToMany(type => PokemonEvolution, pokemonEvolution => pokemonEvolution.pokemon)
	evolution: PokemonEvolution;

	@OneToMany(type => PokemonEvolution, pokemonEvolution => pokemonEvolution.pokemon)
	previousEvolution: PokemonPreviousEvolution;

	@OneToMany(type => PokemonEvolution, pokemonEvolution => pokemonEvolution.pokemon)
	attacks: attacks;
}