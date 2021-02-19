import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FlipCard from 'react-native-flip-card';
import React from 'react';

import {ICharacters} from '../Characters';

interface ILargeCard {
  char: ICharacters;
  setNextCharacterInView: (arg0: boolean) => void;
  setTableInView: (arg0: boolean) => void;
}

const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');

const LargeCard = ({
  char,
  setTableInView,
  setNextCharacterInView,
}: ILargeCard) => {
  const cardActionTextStyle = [styles.allText, styles.cardActionText];
  const combinedCardTextStyle = [styles.allText, styles.cardText];
  const tapTextStyle = [styles.allText, styles.tapTextStyles];

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.tapStyle}>
          <Text style={tapTextStyle}>Tap character to flip card</Text>
        </View>
        <View style={styles.cardContainer}>
          <FlipCard>
            <View style={styles.card}>
              <Text style={combinedCardTextStyle}>{char.jp}</Text>
            </View>
            <View style={styles.card}>
              <Text style={[...combinedCardTextStyle, styles.cardTextSmall]}>
                {char.jp}
              </Text>
              <Text style={combinedCardTextStyle}>{char.ro}</Text>
            </View>
          </FlipCard>
        </View>
        <View style={styles.cardActionBar}>
          <TouchableOpacity onPress={() => setTableInView(true)}>
            <Text style={cardActionTextStyle}>ALL CARDS</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNextCharacterInView(false)}>
            <Text style={cardActionTextStyle}>NEXT CARD</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setNextCharacterInView(true)}>
            <Text style={cardActionTextStyle}>RANDOM CARD</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange',
    display: 'flex',
    height: screenHeight,
  },
  card: {
    justifyContent: 'center',
    display: 'flex',
    height: screenHeight * 0.8,
    width: screenWidth,
  },
  cardContainer: {
    display: 'flex',
    height: screenHeight * 0.8,
    width: screenWidth,
  },
  cardText: {
    color: 'white',
    fontSize: screenWidth / 2,
  },
  cardTextSmall: {
    fontSize: screenWidth / 8,
    opacity: 0.5,
  },
  allText: {
    textAlign: 'center',
  },
  cardActionBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  cardActionText: {
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    borderColor: 'transparent',
    borderRadius: 10,
    borderWidth: 1,
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 10,
    overflow: 'hidden',
    padding: 10,
  },
  tapStyle: {
    position: 'absolute',
    textAlign: 'center',
    opacity: 0.5,
    width: '100%',
  },
  tapTextStyles: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 32,
  },
});

export default LargeCard;
