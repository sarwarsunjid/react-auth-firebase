import React from 'react';
import Signup from './components/Signup';
import Login from './components/Login';
import UpdateProfile from './components/UpdateProfile';
import { BrowserRouter, Route } from "react-router-dom";
import { Dashboard } from './components/Dashboard';


function App() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Dashboard} />
      <Route path ="/login" exact componnet={Login}/>
      <Route path="signup" exact component={Signup} />
      <Route path="update-profile" exact component={UpdateProfile} />
        {/* <Login /> */}

    </BrowserRouter>
  );
}

export default App;
