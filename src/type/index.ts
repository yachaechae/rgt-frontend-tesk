export interface SearchInfo {
  textSnippet: string
}

export interface BooksResponse {
  title: string
  author: string
  description: string
  pageCount: number
  categories: string
  imageLinks: string
  language: string
  publishedDate: string
  saleInfo?: string
}
