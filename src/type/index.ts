export interface BooksResponse {
  id: number
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

export interface BookListProps {
  searchField: string
  searchValue: string
}
