import React from 'react';
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";


function App() {
  return (
      <div className={'wrapper'}>
        <Header />
        <main>
            <HomePage />
        </main>
      </div>
  );
}

export default App;