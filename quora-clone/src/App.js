import React, { useEffect } from 'react';
import { Route, Routes} from 'react-router-dom';
import './App.css';
import Quora from './Quora';
import Login from './Login';
import {useDispatch, useSelector} from "react-redux";
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch();
  /*useEffect = 동기화 */
  
  useEffect(() =>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch(login({
          uid : authUser.uid,
          photo : authUser.photoURL,
          displayName : authUser.displayName,
          email : authUser.email
        }))
        console.log(authUser)
      } else {
        dispatch(logout())
      }
    })
  },[dispatch])


  return (
    // 리액트 v6부터 component 대신 element라고 명명
    <Routes>
      <Route exact path="/" element={user ? <Quora/> : <Login/>}/>
      <Route exact path="/login" element={<Login/>}/>
    </Routes>
  );
}

export default App;
