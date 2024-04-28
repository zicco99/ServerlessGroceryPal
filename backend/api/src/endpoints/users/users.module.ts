import { Module, Logger } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserTable } from 'src/db/models/user.model';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserConfigTable } from 'src/db/models/user-config.model';

@Module({
  imports: [SequelizeModule.forFeature([UserTable, UserConfigTable])],
  controllers: [UsersController],
  providers: [UsersService, Logger],
})
export class UsersModule {}
