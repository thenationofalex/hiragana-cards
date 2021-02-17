import _ from 'lodash/fp';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Card from './Card';

import {Characters, ICharacters} from './Characters';

const CharacterTable = () => {
  const list = _.map((value: ICharacters) => <Card {...value} />)(Characters);

  return (
    <ScrollView>
      <View style={styles.base}>{list}</View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  base: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export default CharacterTable;
