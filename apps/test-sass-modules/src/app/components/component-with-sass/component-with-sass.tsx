import React from 'react';

import './component-with-sass.scss';

/* eslint-disable-next-line */
export interface ComponentWithSassProps {}

export const ComponentWithSass = (props: ComponentWithSassProps) => {
  return (
    <div className="component-with-sass">
      <h1>Component with Sass works!</h1>
    </div>
  );
};

export default ComponentWithSass;
