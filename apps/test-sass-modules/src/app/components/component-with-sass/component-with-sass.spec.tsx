import React from 'react';
import { render } from '@testing-library/react';

import ComponentWithSass from './component-with-sass';

describe(' ComponentWithSass', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentWithSass />);
    expect(baseElement).toBeTruthy();
  });
});
