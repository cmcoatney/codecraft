import { Module } from '@nestjs/common'

import { AppController } from './app.controller'
import { AppService } from './app.service'

import { ApiCoreModule } from '@codecraft/api-core'
import { SnippetModule } from '@codecraft/snippet'

@Module({
  imports: [ApiCoreModule, SnippetModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
