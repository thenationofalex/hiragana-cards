import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import CharacterTable from './CharacterTable';

const props = {
  setCharacterInView: () => jest.fn(),
  character: {ro: 'a', jp: 'あ'},
};

describe('CharacterTable', () => {
  it('Renders correctly', () => {
    const app = render(<CharacterTable {...props} />);
    expect(app).toMatchSnapshot();
  });
});
