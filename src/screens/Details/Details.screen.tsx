import React from 'react';
import {View, Text, Image} from 'react-native';
import styled from 'styled-components';
import {RootStackParamList} from '../../Router';
import {StackScreenProps} from '@react-navigation/stack';
import useAxios from 'axios-hooks';
import {PokemonResponse} from '../../models/pokemonList.type';
import {typeColors} from '../../shared/utils';
import {useTranslation} from 'react-i18next';
import {useDominantColor} from '../../shared/hooks/useDominantColor.hook';
import {Color} from '../../models/color.interface';

type DetailsScreenProps = StackScreenProps<RootStackParamList, 'Details'>;

const DetailsScreen = ({navigation, route}: DetailsScreenProps) => {
  const [t] = useTranslation();
  const [{data, loading}] = useAxios<PokemonResponse>({
    url: `${route.params?.url}`,
  });

  const urlImage = `https://pokeres.bastionbot.org/images/pokemon/${
    route.params?.url.split('/')[6]
  }.png`;

  const setNavigationProps = (color: Color) => {
    navigation.setOptions({
      headerStyle: {
        backgroundColor: color.background,
        shadowRadius: 0,
        shadowOffset: {
          height: 0,
          width: 0,
        },
      },
    });
  };

  const {color} = useDominantColor(urlImage, 'black', setNavigationProps);

  if (loading) {
    return <Text>{t('Loading...')}</Text>;
  }

  return (
    <DetailsView>
      <ImageWrapper color={color.background}>
        <PokemonImage
          source={{
            uri: `https://pokeres.bastionbot.org/images/pokemon/${data.id}.png`,
          }}
        />
      </ImageWrapper>
      <PokemonTitle>{data.name}</PokemonTitle>
      <TypesView>
        {data.types.map((type) => (
          <TypesBadge color={typeColors[type.type.name]} key={type.slot}>
            <TypesText>{type.type.name}</TypesText>
          </TypesBadge>
        ))}
      </TypesView>
      <StatBar
        color="#d13b45"
        full={data.stats[0].base_stat}
        max={300}
        name={'HP  '}
      />
      <StatBar
        color="#fea62a"
        full={data.stats[1].base_stat}
        max={300}
        name={'ATK'}
      />
      <StatBar
        color="#0091e9"
        full={data.stats[2].base_stat}
        max={300}
        name={'DEF'}
      />
      <StatBar
        color="#8db0c3"
        full={data.stats[5].base_stat}
        max={300}
        name={'SPD'}
      />
      <StatBar
        color="#378d3a"
        full={data.base_experience}
        max={1000}
        name={'EXP'}
      />
    </DetailsView>
  );
};

interface StatBarProps {
  color: string;
  full: number;
  max: number;
  name: string;
}

const StatBar = ({color, full, max, name}: StatBarProps) => {
  return (
    <StatBarWrapper>
      <StatText>{name}</StatText>
      <Bar>
        <BarFull color={color} full={(full * 100) / max}>
          <BarText>
            {full} {(full * 100) / max >= 15 ? '/' + max : null}
          </BarText>
        </BarFull>
      </Bar>
    </StatBarWrapper>
  );
};

export default DetailsScreen;

const DetailsView = styled(View)`
  flex: 1;
  align-items: center;
  /* justify-content: center; */
  background-color: #2b2a2c;
`;

const PokemonImage = styled(Image)`
  width: 100px;
  height: 100px;
`;

const PokemonTitle = styled(Text)`
  font-size: 30px;
  color: white;
  margin-top: 20px;
`;

const ImageWrapper = styled(View)<{color: string}>`
  align-self: stretch;
  text-align: center;
  height: 200px;
  background-color: ${(props) => props.color};
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
`;

const StatBarWrapper = styled(View)`
  align-self: stretch;
  align-items: center;
  flex-direction: row;
  height: 20px;
  margin-top: 20px;
`;

const Bar = styled(View)`
  align-self: stretch;
  text-align: center;
  height: 20px;
  background-color: white;
  margin-left: 20px;
  margin-right: 20px;
  border-radius: 10px;
  flex: 1;
`;

const BarFull = styled(View)<{color: string; full: number}>`
  height: 20px;
  background-color: ${(props) => props.color};
  width: ${(props) => props.full}%;
  border-radius: 10px;
  align-items: flex-end;
  justify-content: center;
`;

const StatText = styled(Text)`
  color: grey;
  font-weight: bold;
  padding-right: 10px;
  font-size: 15px;
  align-content: center;
  height: 100%;
  margin-left: 20px;
`;

const BarText = styled(Text)`
  color: white;
  padding-right: 10px;
  padding-left: 10px;
  font-size: 10px;
`;

const TypesView = styled(View)`
  flex-direction: row;
`;

const TypesBadge = styled(View)<{color: string}>`
  background-color: ${(props) => props.color};
  padding: 5px 20px;
  border-radius: 20px;
  margin: 10px;
`;

const TypesText = styled(Text)`
  color: white;
  font-weight: 500;
`;
