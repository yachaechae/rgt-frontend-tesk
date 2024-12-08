import { BooksResponse } from '@/type'
import { useQuery } from '@tanstack/react-query'
import { GetBooks } from '@/api/getBooks'

export const useBooks = () => {
  const query = useQuery<BooksResponse, Error>({
    queryKey: ['books'],
    queryFn: GetBooks,
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
  })

  return query
}
