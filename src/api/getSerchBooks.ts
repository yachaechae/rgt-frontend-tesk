import { supabase } from '@/supabase'

export async function getSearchBooks(searchField: string, serchValue: string) {
  const column = searchField === '제목' ? 'title' : 'author'
  if (!column) {
    throw new Error('잘못된 검색 필드입니다.')
  }

  const { data, error } = await supabase
    .from('books')
    .select('*')
    .ilike(column, `%${serchValue}%`)

  if (error) {
    console.error('Supabase 검색 중 오류:', error)
    throw new Error('검색에 실패했습니다.')
  }

  return data
}
