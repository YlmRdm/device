export class CreateProcessorDto {
  package: string;
  vendor: string;
  imei: number;
  instruction: string;
  voltage: number;
  battery: number;
  signal: number;
}

export default CreateProcessorDto;
