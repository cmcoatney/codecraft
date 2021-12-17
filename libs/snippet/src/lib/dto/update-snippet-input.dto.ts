import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class UpdateSnippetInputDTO {
  @Field({ nullable: true })
  title?: string

  @Field({ nullable: true })
  content?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  imageUrl?: string
}
