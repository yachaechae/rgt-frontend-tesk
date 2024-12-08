import { BooksResponse } from '@/type'
import { supabase } from '@/supabase'

export async function getBooks() {
  const { data, error } = await supabase.from('books').select('*')
  if (error) {
    console.error('데이터 패칭 실패', error)
    return []
  }
  console.log('데이터 패칭 성공', data)
  return data
}
