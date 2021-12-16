import { Resolver, Query, Args } from '@nestjs/graphql'

import { SnippetSeries } from './models/snippet-series'
import { SnippetSeriesService } from './snippet-series.service'

@Resolver()
export class SnippetSeriesResolver {
  constructor(private readonly service: SnippetSeriesService) {}

  @Query(() => [SnippetSeries], { nullable: true })
  snippets() {
    return this.service.snippets();
  }

  @Query(() => SnippetSeries, { nullable: true })
  snippet(@Args('id') id: string) {
    console.log(id)
    return this.service.snippet(id);
  }
}
