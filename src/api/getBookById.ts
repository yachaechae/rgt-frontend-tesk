import { supabase } from '@/supabase';

export async function getBookById(id: string) {
  const { data, error } = await supabase
    .from('books')
    .select('*')
    .eq('id', id)
    .single();

  if (error) {
    throw new Error('책 데이터를 가져오는 데 실패했습니다.');
  }

  return data;
}
