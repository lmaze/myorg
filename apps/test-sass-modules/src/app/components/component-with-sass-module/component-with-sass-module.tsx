import React from 'react';

import styles from './component-with-sass-module.module.scss';

/* eslint-disable-next-line */
export interface ComponentWithSassModuleProps {}

export const ComponentWithSassModule = (
  props: ComponentWithSassModuleProps
) => {
  return (
    <div className={styles.main}>
      <h1>Component with Sass Module does not work!</h1>
    </div>
  );
};

export default ComponentWithSassModule;
