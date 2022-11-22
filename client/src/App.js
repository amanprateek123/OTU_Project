import React from 'react';
import {Route,Switch} from 'react-router-dom'
import Navbar from './Containers/Navbar/Nav'
import Home from './Containers/Home/Home'
import Footer from './Containers/Footer/Footer';

function App() {
  return (
    <React.Fragment>
       <Navbar/>
       <Switch>
          <Route path="/" exact component={Home} />
       </Switch>
       <Footer/>
    </React.Fragment>
  );
}

export default App;
