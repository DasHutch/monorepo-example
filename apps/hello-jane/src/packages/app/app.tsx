import Greeting from '@example/playground.greeting/src/Greeting';
import * as React from 'react';

import './app.css';
import logo from '../../../public/assets/images/logo.svg';

export default class App extends React.Component<any, any>  {
    constructor(props: any) {
        super(props);

        this.state = {
            name: 'Jane'
        };
    }

  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Omaze React App</h1>
        </header>
        <Greeting name={this.state.name} />
        <p className="App-intro">
          To get started, edit <code>src/packages/app/App.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}
