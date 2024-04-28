import { Module, Logger } from '@nestjs/common';
import { SubjectsService } from './subjects.service';
import { SubjectsController } from './subjects.controller';

@Module({
  controllers: [SubjectsController],
  providers: [SubjectsService, Logger],
})
export class SubjectsModule {}
