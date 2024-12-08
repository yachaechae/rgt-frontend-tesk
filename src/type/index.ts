export interface SearchInfo {
  textSnippet: string
}

export interface BooksResponse {
  title: string
  description: string
  pageCount: number
  categories: string
  imageLinks: string
  language: string
  saleInfo?: string
}
