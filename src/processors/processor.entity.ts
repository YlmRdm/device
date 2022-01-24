import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Processor {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ unique: true })
  public email: string;

  @Column()
  public name: string;
}

export default Processor;
