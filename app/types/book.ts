export interface WordPressRenderedField {
  rendered?: string
}

export interface WordPressImage {
  source_url?: string
  alt_text?: string
  media_details?: {
    sizes?: Record<string, { source_url?: string }>
  }
}

export interface WordPressBook {
  id: number
  date?: string
  slug: string
  link?: string
  title: WordPressRenderedField
  excerpt?: WordPressRenderedField
  content?: WordPressRenderedField
  featured_media?: number
  _embedded?: {
    'wp:featuredmedia'?: WordPressImage[]
    'wp:term'?: Array<Array<{ id: number; name: string; slug: string; taxonomy: string }>>
  }
  acf?: Record<string, unknown>
}

export interface WordPressCategory {
  id: number
  name: string
  slug: string
  description?: string
  count?: number
}

export interface WordPressCollection {
  id: number
  name: string
  slug: string
  description?: string
  count?: number
}
