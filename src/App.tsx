import React, { FC } from 'react';
import { compose, composeU } from '@bem-react/core';

import { Button as ButtonPresenter } from './components/Button/Button';
import { withButtonTypeLink } from './components/Button/_type/Button_type_link';
import { withButtonThemeAction } from './components/Button/_theme/Button_theme_action';
// import { withButtonThemeDefault } from './components/Button/_theme/Button_theme_default';

import logo from './logo.svg';
import './App.css';


const Button = compose(
  // composeU(withButtonThemeAction, withButtonThemeDefault),
  withButtonThemeAction,
  withButtonTypeLink,
)(ButtonPresenter);

const App: FC = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <div>
        <Button>I'm basic</Button>
        {/* Renders into HTML as: <button class="Button">I'm Basic</button> */}

        <Button type="link" href="#stub">I'm type link</Button>
        {/* Renders into HTML as: <a href="#stub" class="Button Button_type_link">I'm type link</a> */}

        <Button theme="action">I'm theme action</Button>
        {/* Renders into HTML as: <button class="Button Button_theme_action">I'm theme action</button> */}

        <Button theme="action" type="link">I'm all together</Button>
        {/* Renders into HTML as: <a class="Button Button_theme_action Button_type_link">I'm all together</a> */}
      </div>
    </header>
  </div>
);

export default App;
