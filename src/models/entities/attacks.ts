import { Entity, Column, ManyToMany, PrimaryColumn} from 'typeorm';
import { Pokemon } from './pokemon';

@Entity('attacks')
export class Attacks {
  @PrimaryColumn("text")
  name: string;

  @Column("text")
  category: string;

  @Column("text")
  type: string;

  @Column("int")
  damage: number;

  @ManyToMany(type => Pokemon, pokemon => pokemon.attacks)
    pokemon: Pokemon[];
}