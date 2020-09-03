import React from 'react';
import PokemonListItem from './PokemonListItem.component';
import {render} from '@testing-library/react-native';
import renderer from 'react-test-renderer';

const navigate = jest.fn();
const mockedItem = {
  name: 'pokemonName',
  url: 'https://pokeapi.co/api/v2/pokemon/38/',
};

jest.mock('../../shared/hooks/useDominantColor.hook', () => ({
  useDominantColor: () => ({
    color: {
      background: 'black',
      detail: 'black',
      platform: undefined,
      primary: 'black',
      secondary: 'black',
    },
    error: null,
  }),
}));

describe('PokemonListItem', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PokemonListItem item={mockedItem} navigate={navigate} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders text correctly', () => {
    const element = render(
      <PokemonListItem item={mockedItem} navigate={navigate} />,
    );
    const text = element.getByText(mockedItem.name);

    expect(text).toBeDefined();
  });

  it('renders image correctly', () => {
    const element = render(
      <PokemonListItem item={mockedItem} navigate={navigate} />,
    );
    const image = element.getByTestId('pokemon-list-image');
    expect(image.props.source.uri).toBe(
      'https://pokeres.bastionbot.org/images/pokemon/38.png',
    );
  });
});
