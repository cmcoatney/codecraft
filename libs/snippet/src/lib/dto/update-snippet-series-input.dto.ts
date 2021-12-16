import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateSnippetSeriesInputDTO {
  @Field({ nullable: true })
  title?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  imageUrl?: string
}
