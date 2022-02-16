import React from 'react';

import { Header } from "./components/header/header";
import { MainPage } from './pages/mainPage/mainPage';
import { CategoryPage } from './pages/categoryPage/categoryPage';
import { ProductPage } from './pages/productPage/productPage';
import { Footer } from './components/footer/footer';
import {Router, Route} from 'react-router-dom'

import './App.css';


function App() {

  return (
    <div className='app' datd-test-id='app'>
        <div className='App-wrapper'>

          <Header /> 
          <Router>
              <Route path='/' element={<MainPage />} exact />
              <Route path='/women' element={<CategoryPage page={"Women"} />} exact />
              <Route path='/men' element={<CategoryPage page={"Men"} />} exact />
              <Route path='/women/:id' element={<ProductPage page={"Women"} />} expect />
              <Route path='/men/:id' element={<ProductPage page={"Men"} />} expect />
          </Router>
          <Footer />
        </div>
    </div>


  );
}

export default App;
