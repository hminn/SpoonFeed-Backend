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
import { Policy } from './index';
import { User } from './index';

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
  @PrimaryColumn()
  user!: User;

  @ManyToOne(() => Policy, (policy) => policy.like, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'policy_id' })
  @PrimaryColumn()
  policy!: Policy;
}

export default Like;
