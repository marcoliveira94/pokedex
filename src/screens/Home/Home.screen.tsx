import React, { useEffect, useState } from 'react'
import { View, Animated } from 'react-native'
import styled from 'styled-components'
import { RootStackParamList } from '../../Router'
import useAxios from 'axios-hooks'
import { PokemonListResponse, Pokemon } from '../../models/pokemonList.type'
import { RoutesEnum } from '../../models/routes.enum'
import { StackScreenProps } from '@react-navigation/stack'
import SearchHeader from '../../components/SearchHeader/SearchHeader.component'
import PokemonListItem from '../../components/PokemonListItem/PokemonListItem.component'

type HomeScreenProps = StackScreenProps<RootStackParamList, 'Home'>

const HomeScreen = ({ navigation }: HomeScreenProps) => {
  const [{ data, loading }] = useAxios<PokemonListResponse>({
    url: 'https://pokeapi.co/api/v2/pokemon?limit=1049'
  })

  const [search, setSearch] = useState<string>()
  const [searchResult, setSearchResult] = useState<Pokemon[]>()
  // comment //

  useEffect(() => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: 'red',
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
          width: 0
        }
      }
    })
  }, [navigation])

  const onSearch = (text: string) => {
    setSearch(text)
    const result = data.results.filter((pok) => {
      return pok.name.toLowerCase().includes(text.toLowerCase())
    })

    setSearchResult(result)
  }

  const contentContainerStyle = {
    backgroundColor: '#2b2a2c'
  }

  return (
    <HomeView>
      <SearchHeader color="red" onSearch={onSearch} value={search} />
      {!loading && (
        <PokemonList
          numColumns={2}
          contentContainerStyle={contentContainerStyle}
          keyExtractor={(item, index) => index.toString()}
          data={searchResult || data.results}
          renderItem={({ item }) => {
            return (
              <PokemonListItem
                item={item as Pokemon}
                navigate={() =>
                  navigation.navigate(RoutesEnum.DETAILS, item as Pokemon)
                }
              />
            )
          }}
        />
      )}
    </HomeView>
  )
}

export default HomeScreen

const HomeView = styled(View)`
  flex: 1;
  background-color: #2b2a2c;
`

const PokemonList = styled(Animated.FlatList)`
  padding-top: 20px;
`
