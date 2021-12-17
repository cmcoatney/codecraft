import { Field, ObjectType } from '@nestjs/graphql'

import { Snippet } from './snippet'

@ObjectType()
export class SnippetSeries {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  title?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  imageUrl?: string

  @Field(() => [Snippet], { nullable: true })
  snippets?: Snippet[]
}
