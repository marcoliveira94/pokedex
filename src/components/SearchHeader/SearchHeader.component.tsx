import React from 'react'
import styled from 'styled-components'
import { Animated, TextInput } from 'react-native'

interface SearchHeaderProps {
  onSearch: (text: string) => void
  value?: string
  color: string
}

const SearchHeader = ({ onSearch, value, color }: SearchHeaderProps) => {
  return (
    <SearchWrapper color={color}>
      <SearchInput
        testID={'search-header-input'}
        onChangeText={onSearch}
        value={value}
      />
    </SearchWrapper>
  )
}

export default SearchHeader

const SearchWrapper = styled(Animated.View)<{ color: string }>`
  align-self: stretch;
  text-align: center;
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  height: 200px;
`

const SearchInput = styled(TextInput)`
  width: 80%;
  height: 40px;
  margin: 20px;
  background-color: white;
  border-radius: 20px;
  padding: 10px;
`
