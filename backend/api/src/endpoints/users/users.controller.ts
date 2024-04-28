import {
  Controller,
  Get,
  Post,
  Body,
  UseGuards,
  HttpStatus,
  Logger,
  Put,
  Request,
  UseFilters,
} from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service';
import { Sequelize } from 'sequelize-typescript';
import { DBExceptionFilter } from 'src/error_handling/db.exception.filter';

@UseFilters(DBExceptionFilter)
@Controller('users')
export class UsersController {
  constructor(
    private userService: UsersService,
    private sequelize: Sequelize,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Put('/config')
  async updateUserConfig(
    @Request() request: any,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    // find the active user_config record
    const userConfig = await this.userService.findActiveUserConfig(
      request.user.id,
    );

    // converts the dto in the db user config object
    const convertedUserConfig =
      this.userService.convertUpdateUserConfig(updateUserDto);

    const transaction = await this.sequelize.transaction();

    // updates the record on db
    await this.userService.updateUserConfigOnDb(
      convertedUserConfig,
      userConfig.id,
      transaction,
    );

    await transaction.commit();
    return HttpStatus.OK;
  }
}
