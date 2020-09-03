import {useState, useEffect} from 'react';
import ImageColors from 'react-native-image-colors';

export interface Color {
  background: string;
  detail: string;
  platform?: string;
  primary: string;
  secondary: string;
}

export const useDominantColor = (
  urlImage: string,
  defaultColor: string,
  callBack?: (color: Color) => void,
): {color: Color; error: any} => {
  const initialState = {
    background: defaultColor,
    detail: defaultColor,
    platform: undefined,
    primary: defaultColor,
    secondary: defaultColor,
  };
  const [color, setColor] = useState<Color>(initialState);

  const [error, setError] = useState();

  useEffect(() => {
    ImageColors.getColors(urlImage, {
      fallback: defaultColor,
    })
      .then(
        (colors: any) => {
          setColor(colors);
          return colors;
        },
        (err) => {
          setError(err);
        },
      )
      .then((newColor: Color) => {
        if (callBack) {
          callBack(newColor);
        }
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {color, error};
};

export const typeColors = {
  normal: '#b0ad82',
  fighting: '#b93121',
  flying: '#a088f1',
  poison: '#a23c9f',
  ground: '#DCC770',
  rock: '#baa647',
  bug: '#aab720',
  ghost: '#6d5194',
  steel: '#b9b6c0',
  fire: '#f6882e',
  water: '#6f8afb',
  grass: '#78c74d',
  electric: '#fad029',
  psychic: '#f95988',
  ice: '#9bdcdc',
  dragon: '#6f36f7',
  dark: '#6e5c47',
  fairy: '#32ddc3',
  unknown: '#a4a5a5',
  shadow: '#302f2d',
};
