import React from 'react';
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import useLocalStorage from "use-local-storage";


function App() {
  const [isDark, setIsDark] = useLocalStorage('isDark',true)
    return (
        <div className={'wrapper'} data-theme={isDark ? 'dark' : 'light'}>
            <Header isDark={isDark} setIsDark={setIsDark}/>
            <HomePage/>
        </div>
    );
}

export default App;