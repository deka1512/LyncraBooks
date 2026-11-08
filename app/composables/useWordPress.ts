import type { WordPressBook, WordPressCategory, Author } from '~/types/book'
import { demoAuthors, demoBooks, demoCategories } from '~/data/catalogue'

export function useWordPress() {
  const config = useRuntimeConfig()
  const baseUrl = String(config.wordpressUrl || '').replace(/\/$/, '')
  const apiUrl = (path: string) => baseUrl ? `${baseUrl}/wp-json/wp/v2/${path.replace(/^\//, '')}` : ''

  async function getBooks(params: Record<string, string | number> = {}) {
    if (!baseUrl) {
      let books = [...demoBooks]
      if (params.search) books = books.filter(book => book.title.rendered.toLowerCase().includes(String(params.search).toLowerCase()))
      if (params.category) books = books.filter(book => book._embedded?.['wp:term']?.flat().some(term => term.slug === String(params.category)))
      return books.slice(0, Number(params.per_page || 24))
    }
    try { return await $fetch<WordPressBook[]>(apiUrl('books'), { query: { _embed: 1, per_page: 24, ...params } }) }
    catch { return demoBooks }
  }
  async function getBookBySlug(slug: string) {
    if (!baseUrl) return demoBooks.find(book => book.slug === slug) || null
    try { const books = await $fetch<WordPressBook[]>(apiUrl('books'), { query: { slug, _embed: 1 } }); return books[0] || null }
    catch { return demoBooks.find(book => book.slug === slug) || null }
  }
  async function getCategories() {
    if (!baseUrl) return demoCategories
    try { return await $fetch<WordPressCategory[]>(apiUrl('categories'), { query: { per_page: 50, hide_empty: true } }) }
    catch { return demoCategories }
  }
  async function getAuthors(): Promise<Author[]> { return demoAuthors }
  async function getAuthorBySlug(slug: string) { return demoAuthors.find(author => author.slug === slug) || null }
  async function getBooksByAuthor(slug: string) { return demoBooks.filter(book => book.authors?.some(author => author.slug === slug)) }
  function bookImage(book: WordPressBook) {
    const media = book._embedded?.['wp:featuredmedia']?.[0]
    return media?.media_details?.sizes?.medium_large?.source_url || media?.media_details?.sizes?.large?.source_url || media?.source_url || ''
  }
  function bookCategories(book: WordPressBook) {
    return (book._embedded?.['wp:term'] || []).flat().filter(term => term.taxonomy !== 'post_tag').map(term => term.name)
  }
  return { baseUrl, getBooks, getBookBySlug, getCategories, getAuthors, getAuthorBySlug, getBooksByAuthor, bookImage, bookCategories }
}
