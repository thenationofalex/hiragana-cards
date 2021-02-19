import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import {ICharacters} from '../Characters';
import {CONSTANTS} from '../Constants';

const {height: screenHeight} = Dimensions.get('screen');
const {SPACER} = CONSTANTS;
const cardSize = Math.round(screenHeight / 16);

export interface ICard {
  setCharacterInView: (arg0: ICharacters) => {};
  character: ICharacters;
}

const Card = ({character, setCharacterInView}: ICard) => {
  const {ro, jp} = character;
  const displaySpacer = ro === SPACER;

  const setChar = (char: ICharacters) => {
    if (!displaySpacer) {
      setCharacterInView(char);
    }
  };

  const cardStyle = displaySpacer
    ? [styles.card, styles.cardNoBorder]
    : styles.card;

  return (
    <TouchableOpacity onPress={() => setChar(character)}>
      <View style={cardStyle} key={jp}>
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
    backgroundColor: 'white',
    borderColor: 'orange',
    borderRadius: 150 / 2,
    borderWidth: 1,
    display: 'flex',
    height: cardSize,
    justifyContent: 'center',
    margin: 6,
    overflow: 'hidden',
    width: cardSize,
  },
  cardNoBorder: {
    borderColor: 'transparent',
    borderWidth: 0,
  },
  cardText: {
    fontStyle: 'italic',
    textAlign: 'center',
  },
  cardTextTop: {
    color: 'orange',
    marginBottom: 6,
  },
});

export default Card;
