import { Module } from '@nestjs/common'

import { SnippetSeriesResolver } from './resolvers/snippet-series.resolver'
import { SnippetSeriesService } from './services/snippet-series.service'
import { SnippetResolver } from './resolvers/snippet.resolver'

@Module({
  controllers: [],
  providers: [SnippetSeriesResolver, SnippetSeriesService, SnippetResolver],
  exports: [],
})
export class SnippetModule {}
