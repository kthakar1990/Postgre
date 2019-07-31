import { Entity, PrimaryColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { PokemonEvolution } from './evolutions';
import { PokemonPreviousEvolution } from './previousEvolutions';
import { Attacks } from './attacks';

@Entity('pokemon')
export class Pokemon {
		@PrimaryColumn()
		id: number;

		@Column("text")
		name: string;

		@Column("text")
		classification: string;

		@Column("text", {array: true})
		types: string[];

		@Column("text", {array: true})
		resistant: string[];

		@Column("text", {array: true})
		weakness: string[];

		@Column("float4")
		fleeRate: number;

		@Column("text")
		minWeight: string;

		@Column("text")
		maxWeight: string;

 	@Column("text")
 	minHeight: string;

 	@Column("text")
 	maxHeight: string;

 	@Column("int")
 	maxCP: number;

 	@Column("int")
		maxHP: number;
		
		@Column("text", { nullable: true })
		evolutionReqName: string;

		@Column("int", { nullable: true })
		evolutionReqAmount: number;

		@Column("text", {nullable: true})
		"Pokémon Class": string;

		@Column("text", {nullable: true})
		MYTHIC: string;

		@Column("text", {nullable: true})
		LEGENDARY: string;

	@ManyToMany(type => PokemonEvolution, pokemonEvolution => pokemonEvolution.pokemon, {
		cascade: true
	})
	@JoinTable()
	evolution: PokemonEvolution[];

	@ManyToMany(type => PokemonPreviousEvolution, pokemonPreviousEvolution => pokemonPreviousEvolution.pokemon, {
		cascade: true
	})
	@JoinTable()
	previousEvolution: PokemonPreviousEvolution[];

	@ManyToMany(type => Attacks, attacks => attacks.pokemon, {
		cascade: true
	})
	@JoinTable()
	attacks: Attacks[];
}
