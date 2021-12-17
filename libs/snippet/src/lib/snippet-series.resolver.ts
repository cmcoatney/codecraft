import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { CreateSnippetSeriesInputDTO } from './dto/create-snippet-series-input.dto'
import { UpdateSnippetSeriesInputDTO } from './dto/update-snippet-series-input.dto'

import { SnippetSeries } from './models/snippet-series'
import { SnippetSeriesService } from './snippet-series.service'

@Resolver()
export class SnippetSeriesResolver {
  constructor(private readonly service: SnippetSeriesService) {}

  @Query(() => [SnippetSeries], { nullable: true })
  snippetsSeries() {
    return this.service.snippetsSeries()
  }

  @Query(() => SnippetSeries, { nullable: true })
  snippetSeries(@Args('id') id: string) {
    console.log(id)
    return this.service.snippetSeries(id)
  }

  @Mutation(() => SnippetSeries, { nullable: true })
  createSnippetSeries(@Args('input') input: CreateSnippetSeriesInputDTO) {
    return this.service.createSnippetSeries(input)
  }

  @Mutation(() => SnippetSeries, { nullable: true })
  updateSnippetSeries(@Args('id') id: string, @Args('input') input: UpdateSnippetSeriesInputDTO) {
    return this.service.updateSnippetSeries(id, input)
  }

  @Mutation(() => Boolean, { nullable: true })
  deleteSnippetSeries(@Args('id') id: string) {
    return this.service.deleteSnippetSeries(id)
  }
}
