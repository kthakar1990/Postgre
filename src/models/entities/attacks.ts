import { Entity, Column, ManyToOne, PrimaryGeneratedColumn, JoinColumn} from 'typeorm';
import { Pokemon } from './pokemon';

@Entity('attacks')
export class attacks {

  @PrimaryGeneratedColumn()
  id: number;

  @Column("text")
  category: string;

  @Column("text")
  name: string;

  @Column("text")
  type: string;

  @Column("int")
  damage: number;

  @ManyToOne(type => Pokemon, pokemon => pokemon.attacks)
	@JoinColumn()
	pokemon: Pokemon;
}