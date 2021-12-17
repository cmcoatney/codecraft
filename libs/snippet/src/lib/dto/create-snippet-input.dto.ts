import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class CreateSnippetInputDTO {
  @Field()
  title: string

  @Field()
  content: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  imageUrl?: string
}
