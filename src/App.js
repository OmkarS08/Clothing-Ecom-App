import React from "react";
import {Routes , Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./routes/home/home";
import Authentication from "./routes/Authentication/Authentication";
import Shop from "./routes/Shop/Shop";


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
