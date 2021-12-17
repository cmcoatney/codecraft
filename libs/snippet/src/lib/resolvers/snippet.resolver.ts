import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'

import { SnippetSeriesService } from '../services/snippet-series.service'
import { Snippet } from '../models/snippet'
import { CreateSnippetInputDTO } from '../dto/create-snippet-input.dto'
import { UpdateSnippetInputDTO } from '../dto/update-snippet-input.dto'

@Resolver()
export class SnippetResolver {
  constructor(private readonly service: SnippetSeriesService) {}

  @Mutation(() => Snippet, { nullable: true })
  createSnippet(@Args('seriesId') seriesId: string, @Args('input') input: CreateSnippetInputDTO) {
    return this.service.createSnippet(seriesId, input)
  }

  @Mutation(() => Snippet, { nullable: true })
  updateSnippet(
    @Args('seriesId') seriesId: string,
    @Args('snippetId') snippetId: string,
    @Args('input') input: UpdateSnippetInputDTO,
  ) {
    return this.service.updateSnippet(seriesId, snippetId, input)
  }
}
