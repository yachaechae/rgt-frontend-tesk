'use client'

import React, { useState } from 'react'
import {
  Form,
  Button,
  Input,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from '@nextui-org/react'
import BookList from '@/components/BookList'
import { SearchIcon } from '@nextui-org/shared-icons'

export default function Home() {
  const [searchField, setSearchField] = useState('제목')
  const [searchValue, setSearchValue] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSearchField(searchField)
    setSearchValue(searchValue)
  }

  return (
    <div className='flex flex-col items-center gap-4'>
      <h1 className='text-2xl font-bold'>Book Search</h1>
      <Form onSubmit={handleSubmit} className='flex flex-row gap-2'>
        <Dropdown>
          <DropdownTrigger>
            <Button variant='bordered'>{searchField}</Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            selectionMode='single'
            onSelectionChange={(key) => setSearchField(key as string)}
          >
            <DropdownItem key='제목'>제목</DropdownItem>
            <DropdownItem key='저자'>저자</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Input
          type='text'
          placeholder='검색어를 입력하세요'
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          endContent={<SearchIcon />}
        />
      </Form>
      <BookList searchField={searchField} searchValue={searchValue} />
    </div>
  )
}
