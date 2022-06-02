import { ConfigModule, ConfigService } from "@nestjs/config";
import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import * as entities from './entities/index';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: "postgres",
      host: configService.get('HOST'),
      port: configService.get('PORT'),
      username: configService.get('USER'),
      password: configService.get('PASSWORD'),
      database: configService.get('DATABASE'),
      entities: Object.values(entities),
      synchronize: true,
    }),
    inject: [ConfigService]
  })]
})
export class DatabaseModule { }