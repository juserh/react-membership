import React, {Component} from 'react';
import Membership from './Membership'
import Login from './login';


const App=()=>{
  return (
    <div>
      <h1>회원가입</h1>
      <Membership />
      <h2>로그인</h2>
      <Login />
    </div>
  )
};

export default App;
