import React from 'react';
import Header from './component/header';
import Login from './component/login';
import Footer from './component/footer';
import {  BrowserRouter as Router, Route } from "react-router-dom";


function App(){
    return (
      <Router>
      <div>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossorigin="anonymous"
        />
        <Header />

        <Route path="/footer" component={Footer} />
        <Route path="/login" component={Login} />
        
      </div>
      </Router>
    )
  }  

  export default App
