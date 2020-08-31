import React, { Component } from 'react';
import Navbar from './components/Navbar'
import './App.css';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import todosData from './data/todosData';
import Todo from './components/Todo';

class App extends React.Component {


  componentDidMount(){
    
  }


  render() {

    return (
      <div>
        <Navbar />
        <MainContent />
        <Footer />

      </div>

    );
  }

}

export default App;
