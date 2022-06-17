import React from 'react';
import './App.css';
import Quora from './Quora';
import {useDispatch, useSelector} from "react-redux";
import { selectUser } from './features/userSlice';

import Login from './Login';

function App() {
  const user = useSelector(selectUser)

  return (
    <div className="App">
      <Quora/>
      {
        user ? <Quora/> : <Login/>
      }
      
    </div>
  );
}

export default App;
