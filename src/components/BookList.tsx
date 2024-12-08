import React, { useState } from 'react'
import { useBooks } from '@/hooks/useBooks'
import { Pagination } from '@nextui-org/react'

export default function BookList() {
  const { data, error, isLoading, isError } = useBooks()

  const [currentPage, setCurrentPage] = useState(1)
  const pageSize = 10

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error?.message}</div>
  if (!data || data.length === 0) return <div> 책이 존재하지 않습니다. </div>

  const books = Object.entries(data)
  const totalPages = Math.ceil(books.length / pageSize)

  const currentBooks = books.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  )
  return (
    <>
      <ul className={`w-3/4 flex flex-col gap-4`}>
        {currentBooks.map(([key, book]) => (
          <li className={`flex gap-4`} key={key}>
            {book.imageLinks && (
              <img src={book.imageLinks} alt={`${book.title}`} />
            )}
            <div className={`flex flex-col gap-2`}>
              <h2 className={`w-[60vw] text-xl font-bold truncate`}>
                {book.title}
              </h2>
              {book.author && <p>저자: {book.author}</p>}
              {book.publishedDate && <p>출판일: {book.publishedDate}</p>}
              {book.saleInfo && <p>가격: {book.saleInfo} </p>}
              <a href={book.infoLink} target='_blank' rel='noopener noreferrer'>
                More Info
              </a>
            </div>
          </li>
        ))}
      </ul>
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
