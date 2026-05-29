import type { ElementMetadata } from '../preview-agent/metadata'
import type { EditDiff } from '../preview-agent/popover'

export type SelectionPayload = {
  pageUrl: string; sourceHint?: string
  element: ElementMetadata
  change?: EditDiff & { description?: string }
}

export function buildSelectionComposerText(p: SelectionPayload): string {
  const lines: string[] = []
  lines.push(`针对页面元素 \`${p.element.selector}\`（${p.element.tag}${p.element.text ? `，文本「${p.element.text}」` : ''}）：`)
  if (p.sourceHint) lines.push(`- 来源：${p.sourceHint}`)
  lines.push(`- 页面：${p.pageUrl}`)
  const c = p.change
  if (c?.text) lines.push(`- 文本：「${c.text.from}」→「${c.text.to}」`)
  if (c?.color) lines.push(`- 文字颜色：${c.color.from} → ${c.color.to}`)
  if (c?.background) lines.push(`- 背景：${c.background.from} → ${c.background.to}`)
  if (c?.opacity) lines.push(`- 不透明度：${c.opacity.from} → ${c.opacity.to}`)
  if (c?.fontFamily) lines.push(`- 字体：${c.fontFamily.from} → ${c.fontFamily.to}`)
  if (c?.description) lines.push(`- 说明：${c.description}`)
  lines.push('请在源码中落地以上修改。')
  return lines.join('\n')
}
