import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Snippet {
  @Field({ nullable: true })
  id?: string

  @Field({ nullable: true })
  title?: string

  @Field({ nullable: true })
  description?: string

  @Field({ nullable: true })
  content?: string

  @Field({ nullable: true })
  imageUrl?: string

  @Field(() => [Snippet], { nullable: true })
  snippets?: Snippet[]
}
