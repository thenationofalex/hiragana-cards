import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import Card from './Card';
import {CONSTANTS} from './Constants';

const props = {
  setCharacterInView: () => jest.fn(),
  character: {ro: 'a', jp: 'あ'},
};

describe('Card', () => {
  it('Renders correctly', () => {
    const app = render(<Card {...props} />);
    expect(app).toMatchSnapshot();
  });
  it('Renders spacer correctly', () => {
    const newProps = {
      ...props,
      character: {ro: CONSTANTS.SPACER, jp: `${CONSTANTS.SPACER}-2`},
    };
    const app = render(<Card {...newProps} />);
    expect(app).toMatchSnapshot();
  });
});
