import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import {Characters} from '../Characters';
import LargeCard from '.';

const props = {
  char: Characters[0],
  setNextCharacterInView: () => jest.fn(),
  setTableInView: () => jest.fn(),
};

describe('LargeCard', () => {
  it('Renders correctly', () => {
    const app = render(<LargeCard {...props} />);
    expect(app).toMatchSnapshot();
  });
});
