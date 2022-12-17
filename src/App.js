import React from "react";
import {Routes , Route} from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Home from "./routes/home/home";
import Authentication from "./routes/Authentication/Authentication";
import Shop from "./routes/Shop/Shop";
import { Checkout } from "./routes/checkout/Checkout";


function App() {
  return (
  <Routes>
    <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path="shop/*" element={<Shop/>}/>
      <Route path="auth" element={<Authentication/>}/>
      <Route path="Checkout" element={<Checkout/>}/>

    </Route>
  </Routes>)
}

export default App;
