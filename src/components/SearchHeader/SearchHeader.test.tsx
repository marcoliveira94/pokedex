import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import SearchHeader from './SearchHeader.component';

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

describe('SearchHeader', () => {
  const onSearch = jest.fn();

  it('renders correctly', () => {
    const tree = renderer
      .create(<SearchHeader onSearch={onSearch} value={'test'} color="red" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('onSearch', () => {
    const {getByTestId} = render(
      <SearchHeader onSearch={onSearch} value={'test'} color="red" />,
    );
    const input = getByTestId('search-header-input');
    fireEvent(input, 'onChangeText', 'ab');
    expect(onSearch).toHaveBeenCalledWith('ab');
  });
});
