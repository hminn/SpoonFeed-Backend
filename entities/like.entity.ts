import {
  Entity,
  Column,
  BaseEntity,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import 'reflect-metadata';
import { User } from './user.entity';
import { Policy } from './policy.entity';

@Entity()
export class Like extends BaseEntity {
  @Column({
    type: 'boolean',
    name: 'like_check',
    nullable: false,
    default: false,
  })
  like_check!: boolean;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    nullable: false,
  })
  updatedAt!: Date;

  @ManyToOne(() => User, (user) => user.like, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  @PrimaryColumn({ type: 'int' })
  user!: User;

  @ManyToOne(() => Policy, (policy) => policy.like, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'policy_id' })
  @PrimaryColumn('int')
  policy!: Policy;
}

export default Like;
