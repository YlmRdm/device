import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateProcessorDto from './dto/createProcessor.dto';
import Processor from './processor.entity';

@Injectable()
export class ProcessorsService {
  constructor(
    @InjectRepository(Processor)
    private processorsRepository: Repository<Processor>,
  ) {}

  async addProcessor(processor: CreateProcessorDto) {
    const newProcessor = await this.processorsRepository.create(processor);
    await this.processorsRepository.save(newProcessor);
    return newProcessor;
  }

  async getAllProcessors() {
    return this.processorsRepository.find();
  }
}
