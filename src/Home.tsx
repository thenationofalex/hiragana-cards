import React from 'react';
import {SafeAreaView, View} from 'react-native';

import CharacterTable from './CharacterTable';
import Title from './Title';

const Home = () => {
  return (
    <SafeAreaView>
      <View>
        <Title title={'Hiragana Cards'} />
        <CharacterTable />
      </View>
    </SafeAreaView>
  );
};

export default Home;
