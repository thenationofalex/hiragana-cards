import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {ICharacters} from './Characters';

import {CONSTANTS} from './Constants';

const {SPACER} = CONSTANTS;

const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');
const cardHeight = Math.round(screenHeight / 16.5);
const cardWidth = screenWidth / 5;

const Card = (value: ICharacters) => {
  const {ro, jp} = value;
  const displaySpacer = ro === SPACER;
  return (
    <View style={styles.card} key={jp}>
      <Text style={[styles.cardText, styles.cardTextTop]}>
        {displaySpacer ? null : jp}
      </Text>
      <Text style={styles.cardText}>{displaySpacer ? null : ro}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: cardHeight,
    width: cardWidth,
    display: 'flex',
    justifyContent: 'center',
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
