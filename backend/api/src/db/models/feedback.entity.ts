import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Recipe } from './recipe.entity';

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Recipe)
  @JoinColumn({ name: 'recipe_id' })
  recipe: Recipe;

  @Column({ name: 'is_chosen' })
  isChosen: boolean;

  @Column()
  rating: number;

  @Column()
  notes: string;
}