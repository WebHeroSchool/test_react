import React from 'react';
import { BrowserRouter , Route, NavLink } from 'react-router-dom';




const App = () => (
  <BrowserRouter>
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
  </BrowserRouter>
);


export default App;