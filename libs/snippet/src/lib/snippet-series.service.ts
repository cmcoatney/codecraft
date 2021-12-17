import { Injectable } from '@nestjs/common'

import { CreateSnippetSeriesInputDTO } from './dto/create-snippet-series-input.dto'
import { UpdateSnippetSeriesInputDTO } from './dto/update-snippet-series-input.dto'
import { SnippetSeries } from './models/snippet-series'

@Injectable()
export class SnippetSeriesService {
  items: SnippetSeries[] = [
    {
      id: 'es7-fibonacci',
      title: 'Fibonacci Whiteboard in One Line of Code!',
      snippets: [
        {
          id: 'snippet-1',
          title: 'Snippet #1',
          content: '```js\nfor(;;);\n```\n',
        },
        {
          id: 'snippet-2',
          title: 'Snippet #2',
          content: '```js\nwhile(onBreak) do ;\n```\n',
        },
        {
          id: 'snippet-3',
          title: 'Snippet #3',
          content: '```js\nfor(;;);\n```\n',
        },
      ],
    },
    { id: 'es6-fibonacci', title: 'Fibonacci Whiteboard The ES6 Way' },
  ]

  public snippetsSeries() {
    return this.items
  }

  public snippetSeries(id: string) {
    return this.items.find((item) => item.id === id)
  }

  public createSnippetSeries(input: CreateSnippetSeriesInputDTO) {
    const newSnippetSeries: SnippetSeries = {
      id: Date.now().toString(),
      ...input,
    }

    this.items.push(newSnippetSeries)
    return newSnippetSeries
  }

  public updateSnippetSeries(id: string, input: UpdateSnippetSeriesInputDTO) {
    const series = this.snippetSeries(id)

    const updated: SnippetSeries = {
      ...series,
      ...input,
    }

    // Imperative approach to updating item in array...
    this.items = this.items.map((item) => {
      if (item.id === id) {
        return updated
      }
      return item
    })

    return updated
  }

  public deleteSnippetSeries(id: string) {
    const series = this.snippetSeries(id)

    if (!series) {
      return false
    }

    this.items = [...this.items.filter((item: SnippetSeries) => item.id !== id)]
    return true
  }
}
