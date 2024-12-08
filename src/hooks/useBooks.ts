import { BooksResponse } from '@/type'
import { useQuery } from '@tanstack/react-query'
import { getBooks } from '@/api/getBooks'

export const useBooks = () => {
  const query = useQuery({
    queryKey: ['books'],
    queryFn: () => getBooks(),
    staleTime: 1000 * 60,
    refetchOnWindowFocus: false,
  })

  return query
}
