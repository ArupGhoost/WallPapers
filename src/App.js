
import { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import About from './About';
import './App.css';
import Bikes from './Bikes';
import Cars from './Cars';
import Home from './Home';
import MainDropDown from './MainDropDown';
import Nature from './Nature';
import NavLinks from './NavLinks';
import SignIn from './SignIn';


function App() {

  const[hoverdown, sethoverDown] = useState(false);
  const hoverChange = () => {
    sethoverDown(!hoverdown);
  } 

   return (
    <div className="App">
        <NavLinks hoverdown={hoverdown} hoverChange={hoverChange}/> 
        
        <MainDropDown hoverdown={hoverdown} hoverChange={hoverChange}/>
        
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/cars' component={Cars}/>
          <Route path='/nature' component={Nature} />
          <Route path='/bikes' component={Bikes}/>
          <Route path='/about' component={About}/>
          <Route path='/signin' component={SignIn}/>
        </Switch>

    </div>
  );
}

export default App;
