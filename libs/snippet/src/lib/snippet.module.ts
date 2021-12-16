import { Module } from '@nestjs/common'

import { SnippetSeriesResolver } from './snippet-series.resolver';

@Module({
  controllers: [],
  providers: [SnippetSeriesResolver],
  exports: [],
})
export class SnippetModule {}
