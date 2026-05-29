import { expect, it } from 'vitest'
import { buildSelectionComposerText } from './selectionComposer'

it('renders a readable block with locator + change + source', () => {
  const text = buildSelectionComposerText({
    pageUrl: 'http://127.0.0.1:4321/preview-fs/s1/index.html',
    sourceHint: 'index.html',
    element: { selector: '#title', tag: 'h1', text: '模型还没用熟', classes: [] } as never,
    change: { text: { from: '模型还没用熟', to: '模型用熟了' }, description: '标题改积极一点' } as never,
  })
  expect(text).toContain('#title')
  expect(text).toContain('index.html')
  expect(text).toContain('模型用熟了')
  expect(text).toContain('标题改积极一点')
})
