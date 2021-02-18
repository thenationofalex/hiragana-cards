import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ITitle {
  title: string;
}

const Title = ({title}: ITitle) => (
  <View>
    <Text style={styles.base}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  base: {
    color: 'black',
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 16,
    marginLeft: 44,
    textAlign: 'left',
  },
});

export default Title;
