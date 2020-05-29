import React from 'react';

import './app.scss';

import { ReactComponent as Logo } from './logo.svg';
import { ComponentWithSass } from './components/component-with-sass/component-with-sass';
import { ComponentWithSassModule } from './components/component-with-sass-module/component-with-sass-module';

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.scss file.
   */
  return (
    <div className="app">
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to test-sass-modules!</h1>
      </header>
      <main>
        <ComponentWithSass/>
        <hr className="separator"/>
        <ComponentWithSassModule/>
      </main>
    </div>
  );
};

export default App;
