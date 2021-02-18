import React from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ICharacters} from './Characters';

import {CONSTANTS} from './Constants';

const {height: screenHeight} = Dimensions.get('screen');
const {SPACER} = CONSTANTS;
const cardSize = Math.round(screenHeight / 16);
const cardHeight = cardSize;
const cardWidth = cardSize;

export interface ICard {
  setCharacterInView: (arg0: ICharacters) => {};
  character: ICharacters;
}

const Card = ({character, setCharacterInView}: ICard) => {
  const {ro, jp} = character;
  const displaySpacer = ro === SPACER;
  return (
    <TouchableOpacity onPress={() => setCharacterInView(character)}>
      <View style={styles.card} key={jp}>
        <Text style={[styles.cardText, styles.cardTextTop]}>
          {displaySpacer ? null : jp}
        </Text>
        <Text style={styles.cardText}>{displaySpacer ? null : ro}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    height: cardHeight,
    width: cardWidth,
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 150 / 2,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: 'red',
    margin: 6,
  },
  cardText: {
    textAlign: 'center',
    fontStyle: 'italic',
  },
  cardTextTop: {
    color: 'red',
    marginBottom: 6,
  },
});

export default Card;
