'use client'

import React from 'react'
import { useBooks } from '@/hooks/useBooks'
import { usePathname, useRouter } from 'next/navigation'
import { ArrowLeftIcon } from '@nextui-org/shared-icons'
import Image from 'next/image'

export default function BookDetails() {
  const pathname = usePathname()
  const router = useRouter()
  const slug = pathname.split('/').pop()

  const { book, isLoading, isError, error } = useBooks(
    undefined,
    undefined,
    slug as string,
  )
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error?.message}</div>
  if (!book) return <div>책을 찾을 수 없습니다.</div>

  return (
    <div className='w-1/2 flex flex-col justify-center items-center gap-4 mx-auto'>
      <button
        onClick={() => router.back()}
        className='self-start px-4 py-2 rounded '
      >
        <ArrowLeftIcon width={30} height={30} />
      </button>
      <h1 className='text-2xl font-bold'>{book.title}</h1>
      {book.imageLinks && (
        <Image
          width={300}
          height={400}
          objectFit='cover'
          src={book.imageLinks}
          alt={book.title}
          className='w-48 h-64 object-cover'
        />
      )}
      {book.author && <p>저자: {book.author}</p>}
      {book.publishedDate && <p>출판일: {book.publishedDate}</p>}
      {book.saleInfo && <p>가격: {book.saleInfo}</p>}
      {book.description && (
        <div>
          <p className='text-xl font-bold'>소개</p>
          {book.description}
        </div>
      )}
    </div>
  )
}
