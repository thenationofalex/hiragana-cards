import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface ITitle {
  title: string;
}

const Title = ({title}: ITitle) => {
  return (
    <View>
      <Text style={styles.base}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  base: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 32,
    marginTop: 16,
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export default Title;
