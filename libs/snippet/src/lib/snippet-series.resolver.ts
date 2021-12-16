import { Resolver, Query } from '@nestjs/graphql'

import { Snippet } from './models/snippet'

@Resolver()
export class SnippetSeriesResolver {
  @Query(() => [Snippet])
  snippets() {
    return []
  }
}
