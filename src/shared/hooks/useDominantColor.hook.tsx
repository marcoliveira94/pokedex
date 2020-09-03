import {useState, useEffect} from 'react';
import ImageColors from 'react-native-image-colors';
import {Color} from '../../models/color.interface';

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
