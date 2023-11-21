import React from 'react';
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import Sidebar from "./components/sidebar/Sidebar";


function App() {
  return (
      <div className='wrapper'>
        <Header />
        <main>
            <Routes>
                <Route path='' element={<HomePage />} />
            </Routes>
            <Sidebar />
        </main>
      </div>
  );
}

export default App;