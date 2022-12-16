import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// import { Counter } from './features/counter/Counter';
import './App.css';
import Book from './features/book/Components/Book/Book';
import Home from './features/book/Components/Home/Home';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        {/* <Route path='/book' element={<Book/>}></Route> */}
      </Routes>
      </BrowserRouter>
         
    </div>
   
  );
}

export default App;
