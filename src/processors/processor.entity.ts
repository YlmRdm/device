import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
class Processor {
  @PrimaryGeneratedColumn()
  public id: number;

  // package code
  @Column({ unique: true })
  public package: string;

  // vendor code
  @Column()
  public vendor: string;

  // IMEI
  @Column()
  public imei: number;

  // instruction
  @Column()
  public instruction: string;

  // voltage
  @Column()
  public voltage: number;

  // battery level
  @Column()
  public battery: number;

  // network signal
  @Column()
  public signal: number;
}

export default Processor;
