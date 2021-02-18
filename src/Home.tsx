import React, {useState} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Characters, ICharacters} from './Characters';

import CharacterTable from './CharacterTable';
import LargeCard from './LargeCard';
import Title from './Title';

const Home = () => {
  const [tableInView, setTableInView] = useState(false);
  const [char, setChar] = useState(Characters[0]);

  const setCharacterInView = (value: ICharacters) => {
    setChar(value);
    setTableInView(false);
  };

  return (
    <SafeAreaView style={!tableInView && styles.largeCardContainer}>
      {tableInView ? (
        <View style={styles.home}>
          <Title title={'👹 Hiragana 👹'} />
          <CharacterTable setCharacterInView={setCharacterInView} />
        </View>
      ) : (
        <LargeCard setTableInView={setTableInView} char={char} />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  largeCardContainer: {
    backgroundColor: 'red',
  },
  home: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
});

export default Home;
