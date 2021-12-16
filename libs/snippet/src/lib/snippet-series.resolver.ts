import { Resolver, Query, Args } from '@nestjs/graphql'

import { SnippetSeries } from './models/snippet-series'

@Resolver()
export class SnippetSeriesResolver {
  @Query(() => [SnippetSeries], { nullable: true })
  snippets() {
    return []
  }

  @Query(() => SnippetSeries, { nullable: true })
  snippet(@Args('id') id: string) {
    console.log(id)
    return null
  }
}
