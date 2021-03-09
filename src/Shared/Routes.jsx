import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from '../Pages/Home';
import Data from '../Data/data';
import About from '../Pages/About';

const Routes = () => {
  return (
    
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Route exact path="/About" component={ About }/>
      <Route exact path="/Data" component={ Data }/>
    </Switch>
    

  );
}
 
export default Routes;