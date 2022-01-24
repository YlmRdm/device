import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import CreateProcessorDto from './dto/createProcessor.dto';
import { ProcessorsService } from './processors.service';

@Controller()
export class ProcessorsController {
  constructor(private readonly processorsService: ProcessorsService) {}

  @MessagePattern({ cmd: 'add-processor' })
  addProcessor(@Payload() processor: CreateProcessorDto) {
    return this.processorsService.addProcessor(processor);
  }

  @MessagePattern({ cmd: 'get-all-processors' })
  getAllProcessors() {
    return this.processorsService.getAllProcessors();
  }
}
