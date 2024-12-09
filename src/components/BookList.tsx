'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Pagination } from '@nextui-org/react'
import { useBooks } from '@/hooks/useBooks'
import { BookListProps, BooksResponse } from '@/type'
import Image from 'next/image'

export default function BookList({ searchField, searchValue }: BookListProps) {
  const { books, isLoading, isError, error } = useBooks(
    searchField,
    searchValue,
  )
  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error?.message}</div>
  if (!books || books.length === 0) return <div>책이 존재하지 않습니다.</div>

  const totalPages = Math.ceil(books.length / pageSize)
  const currentBooks = books.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )
  return (
    <>
      <div className='flex flex-col items-center gap-4'>
        <ul className={`w-3/4 flex flex-col gap-4`}>
          {currentBooks.map((book: BooksResponse) => (
            <Link href={`/${book.id}`} key={book.id} passHref>
              <li className={`flex gap-4`}>
                {book.imageLinks && (
                  <Image
                    width={200}
                    height={200}
                    src={book.imageLinks}
                    alt={`${book.title}`}
                  />
                )}
                <div className={`flex flex-col gap-2`}>
                  <h2 className={`w-[60vw] text-xl font-bold truncate`}>
                    {book.title}
                  </h2>
                  {book.author && <p>저자: {book.author}</p>}
                  {book.publishedDate && <p>출판일: {book.publishedDate}</p>}
                  {book.saleInfo && <p>가격: {book.saleInfo} </p>}
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <Pagination
        className={`m-1`}
        showControls
        initialPage={1}
        total={totalPages}
        page={currentPage}
        onChange={(page) => setCurrentPage(page)}
      />
    </>
  )
}
