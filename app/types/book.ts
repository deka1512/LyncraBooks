export interface WordPressRenderedField { rendered?: string }
export interface WordPressImage { source_url?: string; alt_text?: string; media_details?: { sizes?: Record<string, { source_url?: string }> } }
export interface Author { id: number; name: string; slug: string; portrait: string; biography: string; shortBio: string }
export interface WordPressBook {
  id: number; date?: string; slug: string; link?: string; title: WordPressRenderedField;
  excerpt?: WordPressRenderedField; content?: WordPressRenderedField; featured_media?: number;
  authors?: Author[];
  _embedded?: { 'wp:featuredmedia'?: WordPressImage[]; 'wp:term'?: Array<Array<{ id: number; name: string; slug: string; taxonomy: string }>> };
  acf?: Record<string, unknown>
}
export interface WordPressCategory { id: number; name: string; slug: string; description?: string; count?: number }
export type WordPressCollection = WordPressCategory
