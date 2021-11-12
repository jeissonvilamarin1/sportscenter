import React from 'react';
import Form from './components/Form';
import Hero from './components/Hero';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero/>
      <Form />
    </div>
  );
}

export default App;
