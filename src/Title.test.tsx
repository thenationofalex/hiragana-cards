import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import Title from './Title';

describe('Title', () => {
  it('Renders correctly', () => {
    const app = render(<Title title="Title" />);
    expect(app).toMatchSnapshot();
  });
});
