import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';




const App = () => (
  <Router>
    <div >
      <a
        href='https://webheroschool.ru/'
        target='_blank'
        rel='noopener noreferrer'

      >
        <div ></div>
      </a>
      <div >
        <NavLink to='/todo' >
          Дела
        </NavLink>
        <NavLink to='/' >
          Обо мне
        </NavLink>
      </div>
      <Route path='/' exact  />
      <Route path='/todo'  />
    </div>
  </Router>
);


export default App;