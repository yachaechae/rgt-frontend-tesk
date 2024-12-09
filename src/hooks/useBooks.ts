import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getBooks } from '@/api/getBooks'
import { postAddBook } from '@/api/postAddBook'
import { postDeleteBook } from '@/api/postDeleteBook'
import { getSearchBooks } from '@/api/getSerchBooks'
import { BooksResponse } from '@/type'
import { getBookById } from '@/api/getBookById'

export const useBooks = (
  searchField?: string,
  searchValue?: string,
  id?: string,
) => {
  const queryClient = useQueryClient()

  const bookQuery = useQuery({
    queryKey: ['books'],
    queryFn: getBooks,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
  })
  const bookDetailQuery = useQuery({
    queryKey: ['book', id],
    queryFn: () => getBookById(id!),
    enabled: !!id, // id가 있을 때만 실행
  })

  const searchBooksQuery = useQuery({
    queryKey: ['searchBooks', searchField, searchValue],
    queryFn: () => getSearchBooks(searchField!, searchValue!),
    enabled: !!searchValue,
  })

  const addBookMutation = useMutation({
    mutationFn: (newBook: BooksResponse) => postAddBook(newBook),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] })
    },
  })

  const deleteBookMutation = useMutation({
    mutationFn: (id: number) => postDeleteBook(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['books'] })
    },
  })

  return {
    book: bookDetailQuery.data,
    books: searchValue ? searchBooksQuery.data : bookQuery.data,
    isLoading: searchValue ? searchBooksQuery.isLoading : bookQuery.isLoading,
    isError: searchValue ? searchBooksQuery.isError : bookQuery.isError,
    error: searchValue ? searchBooksQuery.error : bookQuery.error,
    addBook: addBookMutation.mutate,
    deleteBook: deleteBookMutation.mutate,
  }
}
