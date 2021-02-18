import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import LargeCard from './LargeCard';

const props = {
  setTableInView: () => jest.fn(),
  char: {ro: 'a', jp: 'あ'},
};

describe('LargeCard', () => {
  it('Renders correctly', () => {
    const app = render(<LargeCard {...props} />);
    expect(app).toMatchSnapshot();
  });
});
