import { supabase } from '@/supabase'
import { BooksResponse } from '@/type'

export async function postAddBook(book: BooksResponse) {
  const { data, error } = await supabase.from('books').insert(book)
  if (error) {
    console.error(error)
    throw new Error(error.message)
  }
  return data
}
