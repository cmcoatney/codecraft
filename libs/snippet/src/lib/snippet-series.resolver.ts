import { Resolver, Query, Args, Mutation } from '@nestjs/graphql'
import { CreateSnippetSeriesInputDTO } from './dto/create-snippet-series-input.dto';

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

  @Mutation(() => SnippetSeries, { nullable: true })
  createSnippetSeries(@Args('input') input: CreateSnippetSeriesInputDTO) {
    return this.service.createSnippetSeries(input)
  }
}
