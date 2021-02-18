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

interface ILargeCard {
  char: ICharacters;
  setTableInView: (arg0: boolean) => void;
}

const {height: screenHeight, width: screenWidth} = Dimensions.get('screen');

const LargeCard = ({char, setTableInView}: ILargeCard) => (
  <SafeAreaView>
    <View style={styles.container}>
      <View style={styles.cardContainer}>
        <FlipCard>
          <View style={styles.card}>
            <Text style={[styles.allText, styles.cardText]}>{char.jp}</Text>
          </View>
          <View style={styles.card}>
            <Text
              style={[styles.allText, styles.cardText, styles.cardTectSmall]}>
              {char.jp}
            </Text>
            <Text style={[styles.allText, styles.cardText]}>{char.ro}</Text>
          </View>
        </FlipCard>
      </View>
      <View>
        <TouchableOpacity onPress={() => setTableInView(true)}>
          <Text style={styles.allText}>All cards</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => setTableInView(true)}>
          <Text style={styles.allText}>Next card</Text>
        </TouchableOpacity>
      </View>
    </View>
  </SafeAreaView>
);

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
  cardTectSmall: {
    fontSize: screenWidth / 8,
    opacity: 0.5,
  },
  allText: {
    textAlign: 'center',
  },
});

export default LargeCard;
