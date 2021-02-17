import _ from 'lodash/fp';
import React from 'react';
import {SafeAreaView, ScrollView, Text, View} from 'react-native';

import {Characters, ICharacters} from './Characters';

const Home = () => {
  const title = 'Hiragana Cards';

  const ListofChars = _.map((value: ICharacters) => (
    <View>
      <Text>{value.ro}</Text>
      <Text>{value.jp}</Text>
    </View>
  ))(Characters);

  return (
    <SafeAreaView>
      <View>
        <Text>{title}</Text>
        <ScrollView>{ListofChars}</ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default Home;
