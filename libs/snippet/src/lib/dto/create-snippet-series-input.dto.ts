import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateSnippetSeriesInputDTO {
  @Field()
  title: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  imageUrl?: string
}
