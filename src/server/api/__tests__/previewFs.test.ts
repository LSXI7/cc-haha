import { describe, expect, it } from 'bun:test'
import { contentTypeForPath } from '../previewFs'

describe('contentTypeForPath', () => {
  it('maps common web asset extensions', () => {
    expect(contentTypeForPath('/x/index.html')).toBe('text/html; charset=utf-8')
    expect(contentTypeForPath('/x/app.css')).toBe('text/css; charset=utf-8')
    expect(contentTypeForPath('/x/app.js')).toBe('text/javascript; charset=utf-8')
    expect(contentTypeForPath('/x/data.json')).toBe('application/json; charset=utf-8')
    expect(contentTypeForPath('/x/logo.svg')).toBe('image/svg+xml')
    expect(contentTypeForPath('/x/p.png')).toBe('image/png')
  })
  it('falls back to octet-stream for unknown', () => {
    expect(contentTypeForPath('/x/file.bin')).toBe('application/octet-stream')
  })
})
