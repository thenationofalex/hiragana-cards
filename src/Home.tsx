import _ from 'lodash/fp';
import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Characters, ICharacters} from './Characters';

import CharacterTable from './CharacterTable';
import {CONSTANTS} from './Constants';
import LargeCard from './LargeCard';
import Title from './Title';

const Home = () => {
  const [tableInView, setTableInView] = useState(false);
  const [char, setChar] = useState(Characters[0]);

  const setCharacterInView = (value: ICharacters) => {
    setChar(value);
    setTableInView(false);
  };

  const setNextCharacterInView = () => {
    let currentIdx = _.findIndex((value: ICharacters) =>
      _.isEqual(value.ro, char.ro),
    )(Characters);

    const next = (): ICharacters => {
      if (Characters[currentIdx + 1].ro === CONSTANTS.SPACER) {
        return Characters[currentIdx + 2];
      }
      return Characters[currentIdx + 1];
    };

    if (currentIdx >= 0 && currentIdx < Characters.length - 1) {
      setChar(next());
    } else {
      setChar(Characters[0]);
    }
  };

  return (
    <SafeAreaView style={!tableInView && styles.largeCardContainer}>
      {tableInView ? (
        <View style={styles.home}>
          <Title title={'🍊 Hiragana'} />
          {/* @ts-ignore */}
          <CharacterTable setCharacterInView={setCharacterInView} />
        </View>
      ) : (
        <LargeCard
          char={char}
          setTableInView={setTableInView}
          setNextCharacterInView={setNextCharacterInView}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  largeCardContainer: {
    backgroundColor: 'orange',
  },
  home: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
    backgroundColor: 'white',
  },
});

export default Home;
