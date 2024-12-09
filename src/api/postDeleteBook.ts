import { supabase } from '@/supabase'

export async function postDeleteBook(id: number) {
  const { error } = await supabase.from('books').delete().eq('id', id)
  if (error) {
    console.error(error)
    throw new Error(error.message)
  }
}
