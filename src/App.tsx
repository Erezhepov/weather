import React from 'react';
import Header from "./components/header/Header";
import HomePage from "./pages/home/HomePage";
import useLocalStorage from "use-local-storage";
import Footer from "./components/footer/Footer";


function App() {
  const [isDark, setIsDark] = useLocalStorage('isDark',true)
    return (
        <div className={'wrapper'} data-theme={isDark ? 'dark' : 'light'}>
            <Header isDark={isDark} setIsDark={setIsDark}/>
            <HomePage/>
            <Footer/>
        </div>
    );
}

export default App;