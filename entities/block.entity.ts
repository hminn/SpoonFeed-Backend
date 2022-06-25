import {
  Entity,
  Column,
  BaseEntity,
  JoinColumn,
  ManyToOne,
  UpdateDateColumn,
  PrimaryColumn,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Block extends BaseEntity {
  @Column({
    type: 'boolean',
    name: 'block_check',
    nullable: false,
    default: false,
  })
  block_check!: boolean;

  @UpdateDateColumn({
    type: 'timestamp',
    name: 'updated_at',
    nullable: false,
  })
  updatedAt!: Date;

  @ManyToOne(() => User, (user) => user.block, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'user_id' })
  @PrimaryColumn()
  user!: User;

  @ManyToOne(() => User, (user) => user.block, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'blocked_id' })
  @PrimaryColumn()
  blocked!: User;
}

export default Block;
