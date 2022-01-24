import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import Processor from './processor.entity';
import { ProcessorsController } from './processors.controller';
import { ProcessorsService } from './processors.service';

@Module({
  imports: [TypeOrmModule.forFeature([Processor])],
  providers: [ProcessorsService],
  exports: [],
  controllers: [ProcessorsController],
})
export class ProcessorsModule {}
