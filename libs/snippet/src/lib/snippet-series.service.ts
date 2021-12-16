import { Injectable } from '@nestjs/common'
import { SnippetSeries } from './models/snippet-series'

@Injectable()
export class SnippetSeriesService {
  items: SnippetSeries[] = [
    { id: 'es7-fibonacci', title: 'Fibonacci Whiteboard in One Line of Code!' },
    { id: 'es6-fibonacci', title: 'Fibonacci Whiteboard The ES6 Way' },
  ]

  public snippets() {
    return this.items
  }

  public snippet(id: string) {
    return this.items.find((item) => item.id === id)
  }
}
