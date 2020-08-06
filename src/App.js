import React from 'react';
import Routes from './routes/index';
import {GlobalStyle} from './styles/global';

class App extends React.Component { 
  render() {

    return (
      <div style={{height: "100%"}}>
        <GlobalStyle/>
        <Routes/>
      </div>
    )
  }
}

export default App;