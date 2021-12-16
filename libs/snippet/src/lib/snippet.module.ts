import { Module } from '@nestjs/common'

import { SnippetSeriesResolver } from './snippet-series.resolver'
import { SnippetSeriesService } from './snippet-series.service'

@Module({
  controllers: [],
  providers: [SnippetSeriesResolver, SnippetSeriesService],
  exports: [],
})
export class SnippetModule {}
