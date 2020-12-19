import React from "react";
import { BrowserRouter, Route} from "react-router-dom";
import About from "./routes/About";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Navigation from "./components/Navigation";
import "./App.css";

function App(){
  return (
  <BrowserRouter> 
  
    <Navigation />
    <Route path="/" exact={true} component={Home}  />
    <Route path="/about" component={About} />
    <Route path="/movie/:id" component={Detail} />
  </BrowserRouter>
  );
}
/*hashRouter는 #을 추가하여 url을 구성, github페이지에 올리기가 편함*/
export default App;
