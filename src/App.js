import React from "react";
import {Routes , Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./routes/home/home";
import Authentication from "./routes/Authentication/Authentication";

function Shop(){
  return <h1>Hello shop</h1>
}

function App() {
  return (
  <Routes>
    <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path="shop" element={<Shop/>}/>
      <Route path="auth" element={<Authentication/>}/>
    </Route>
  </Routes>)
}

export default App;
