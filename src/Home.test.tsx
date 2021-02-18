import 'react-native';
import React from 'react';
import {render} from '@testing-library/react-native';

import Home from './Home';

describe('Home', () => {
  it('Renders correctly', () => {
    const app = render(<Home />);
    expect(app).toMatchSnapshot();
  });
});
