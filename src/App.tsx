import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Content>
          Main
        </Content>
      </main>
    </div>
  );
}

export default App;
