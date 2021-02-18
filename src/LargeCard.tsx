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

import {ICharacters} from './Characters';
import {hasIn} from 'lodash';

interface ILargeCard {
  char: ICharacters;
  setTableInView: (arg0: boolean) => void;
}

const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');

const LargeCard = ({char, setTableInView}: ILargeCard) => {
  const combinedCardTextStyle = [styles.allText, styles.cardText];
  const cardActionTextStyle = [styles.allText, styles.cardActionText];

  return (
    <SafeAreaView>
      <View style={styles.container}>
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
          <TouchableOpacity onPress={() => setTableInView(true)}>
            <Text style={cardActionTextStyle}>NEXT CARD</Text>
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
    justifyContent: 'space-between',
  },
  cardActionText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    marginHorizontal: 20,
    borderWidth: 1,
    padding: 10,
    borderColor: 'transparent',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
});

export default LargeCard;
