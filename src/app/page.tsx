'use client'

import {
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Form,
  Input,
} from '@nextui-org/react'
import { useMemo, useState } from 'react'
import { SearchIcon } from '@nextui-org/shared-icons'
import type { Selection } from '@nextui-org/react'
import BookList from '@/components/BookList'

export default function Home() {
  const [selectedOptions, setSelectedOptions] = useState<Selection>(
    new Set(['선택']),
  )
  const [searchValue, setSearchValue] = useState<string>('')

  const selectedValue = useMemo(
    () => Array.from(selectedOptions).join(', ').replace(/_/g, ''),
    [selectedOptions],
  )

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h1 className='text-2xl font-bold'>Book List</h1>
      <div className='flex flex-row items-center justify-center'>
        <Dropdown>
          <DropdownTrigger>
            <Button className='capitalize' variant='bordered'>
              {selectedValue}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            className={`flex-col`}
            selectedKeys={selectedOptions}
            selectionMode='single'
            variant='solid'
            onSelectionChange={setSelectedOptions}
          >
            <DropdownItem key='제목'>제목</DropdownItem>
            <DropdownItem key='저자'>저자</DropdownItem>
          </DropdownMenu>
        </Dropdown>
        <Input
          endContent={
            <SearchIcon className='text-2xl text-default-400 pointer-events-none flex-shrink-0' />
          }
          labelPlacement='outside'
          placeholder='검색어를 입력해주세요'
          type='text'
          value={searchValue}
          onChange={(e) => {
            setSearchValue(e.target.value as string)
          }}
        />
      </div>
  <BookList />

</div>
  )
}
