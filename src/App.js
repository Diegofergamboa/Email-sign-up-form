import React from 'react';
import { Header } from './components/App/Header';
import { Form } from './components/App/Form';
import './scss/globals.scss';

function App() {

  return (
    <React.Fragment>
    <main className="main-class">
      <Header/>
      <Form></Form>
    </main>
    </React.Fragment>
  );
}


export default App;
