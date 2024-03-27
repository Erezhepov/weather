import React from 'react';
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import useLocalStorage from "use-local-storage";


function App() {
    const [isDark, setIsDark] = useLocalStorage('isDark',true)
  return (
      <div data-theme={isDark ? 'dark' : 'light'} className={'wrapper'}>
        <Header isDark={isDark} setIsDark={setIsDark} />
        <main>
            <HomePage />
        </main>
      </div>
  );
}

export default App;