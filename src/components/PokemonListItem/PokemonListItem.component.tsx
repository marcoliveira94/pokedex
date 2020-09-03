import React from 'react'
import { Pokemon } from '../../models/pokemonList.type'
import styled from 'styled-components'
import { Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { useDominantColor } from '../../shared/hooks/useDominantColor.hook'

interface PokemonListItemProps {
  item: Pokemon
  navigate: () => void
}

const PokemonListItem = ({ item, navigate }: PokemonListItemProps) => {
  const urlImage = `https://pokeres.bastionbot.org/images/pokemon/${
    item.url.split('/')[6]
  }.png`
  const { color } = useDominantColor(urlImage, 'black')
  return (
    <ItemView background={color.background} onPress={navigate}>
      <ItemImage testID={'pokemon-list-image'} source={{ uri: urlImage }} />
      <ItemText>{item.name}</ItemText>
    </ItemView>
  )
}

export default PokemonListItem

const ItemView = styled(TouchableOpacity)<{ background: string }>`
  background-color: ${(props) => props.background};
  flex: 1;
  flex-direction: column;
  margin: 10px;
  height: ${Dimensions.get('window').width / 2 - 20}px;
  max-width: ${Dimensions.get('window').width / 2 - 20}px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`

const ItemText = styled(Text)`
  font-size: 20px;
`

const ItemImage = styled(Image)`
  width: 50%;
  height: 50%;
`
