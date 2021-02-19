import _ from 'lodash/fp';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Card, {ICard} from '../Cards';

import {Characters, ICharacters} from '../Characters';

interface ICharacterTable extends ICard {}

const CharacterTable = ({setCharacterInView}: ICharacterTable) => {
  const list = _.map((character: ICharacters) => (
    <Card
      key={character.jp}
      character={character}
      setCharacterInView={setCharacterInView}
    />
  ))(Characters);

  return (
    <ScrollView>
      <View style={styles.base}>{list}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  base: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
});

export default CharacterTable;
