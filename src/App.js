import React from 'react';
import logo from './logo.svg';
import Navbar from './components/Navbar'
import './App.css';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import todosData from './data/todosData';
import Todo from './components/Todo';

const App = () => { 

  const todoList = todosData.map(item => <Todo key={item.id} item={item} />);

  return (
    <div>
      {todoList}
      <Footer />
    </div>
    
  );
}

export default App;
