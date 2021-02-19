import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import {Characters} from '../Characters';
import CharacterTable from '.';

const props = {
  setCharacterInView: () => jest.fn(),
  character: Characters[0],
};

describe('CharacterTable', () => {
  it('Renders correctly', () => {
    const app = render(<CharacterTable {...props} />);
    expect(app).toMatchSnapshot();
  });
});
