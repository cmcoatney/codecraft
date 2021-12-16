import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'

import { ApiCoreResolver } from './api-core.resolver'
import { configuration } from './config/configuration'
import { validationSchema } from './config/validation'



@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      debug: true,
      sortSchema: true,
      playground: true,
    }),
  ],
  controllers: [],
  providers: [ApiCoreResolver],
  exports: [],
})
export class ApiCoreModule {}
