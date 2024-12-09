import { BooksResponse } from '@/type'
import { supabase } from '@/supabase'

export async function getBooks() {
  const { data, error } = await supabase.from('books').select('*')
  if (error) {
    return []
  }
  return data
}
