import React from "react";
import {Routes , Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./routes/home/home";
import SignIn from "./routes/sign-in/sign-in";

function Shop(){
  return <h1>Hello shop</h1>
}

function App() {
  return (
  <Routes>
    <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="sign-in" element={<SignIn/>}/>
    </Route>
  </Routes>)
}

export default App;
