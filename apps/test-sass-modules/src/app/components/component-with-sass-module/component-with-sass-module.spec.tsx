import React from 'react';
import { render } from '@testing-library/react';

import ComponentWithSassModule from './component-with-sass-module';

describe(' ComponentWithSassModule', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ComponentWithSassModule />);
    expect(baseElement).toBeTruthy();
  });
});
