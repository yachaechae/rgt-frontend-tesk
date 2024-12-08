import axiosInstance from './axiosInstance'
import { BooksResponse } from '@/type'

export const GetBooks = async (): Promise<BooksResponse> => {
  try {
    const response = await axiosInstance.get<BooksResponse>('/books.json')
    return response.data
  } catch (error) {
    console.error('Error fetching books:', error)
    throw error
  }
}
