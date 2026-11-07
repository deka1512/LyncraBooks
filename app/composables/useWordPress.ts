import type { WordPressBook, WordPressCategory } from '~/types/book'

export function useWordPress() {
  const config = useRuntimeConfig()
  const baseUrl = String(config.wordpressUrl || '').replace(/\/$/, '')

  const apiUrl = (path: string) => {
    if (!baseUrl) return ''
    return `${baseUrl}/wp-json/wp/v2/${path.replace(/^\//, '')}`
  }

  async function getBooks(params: Record<string, string | number> = {}) {
    if (!baseUrl) return [] as WordPressBook[]
    try {
      return await $fetch<WordPressBook[]>(apiUrl('books'), {
        query: { _embed: 1, per_page: 12, ...params },
      })
    } catch {
      return [] as WordPressBook[]
    }
  }

  async function getBookBySlug(slug: string) {
    if (!baseUrl) return null
    try {
      const books = await $fetch<WordPressBook[]>(apiUrl('books'), {
        query: { slug, _embed: 1 },
      })
      return books[0] || null
    } catch {
      return null
    }
  }

  async function getCategories() {
    if (!baseUrl) return [] as WordPressCategory[]
    try {
      return await $fetch<WordPressCategory[]>(apiUrl('categories'), {
        query: { per_page: 50, hide_empty: true },
      })
    } catch {
      return [] as WordPressCategory[]
    }
  }

  function bookImage(book: WordPressBook) {
    const media = book._embedded?.['wp:featuredmedia']?.[0]
    return media?.media_details?.sizes?.medium_large?.source_url
      || media?.media_details?.sizes?.large?.source_url
      || media?.source_url
      || ''
  }

  function bookCategories(book: WordPressBook) {
    return (book._embedded?.['wp:term'] || [])
      .flat()
      .filter(term => term.taxonomy !== 'post_tag')
      .map(term => term.name)
  }

  return { baseUrl, getBooks, getBookBySlug, getCategories, bookImage, bookCategories }
}
