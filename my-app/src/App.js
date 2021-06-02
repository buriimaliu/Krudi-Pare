import './App.css';
import {Home} from './Home';
import {Contact} from './Contact';
import {Navigation} from './Navigation';

import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <div className="container">
      <h3 className="m-3 d-flex justify-content-center"> 
      Contact US
      </h3>

      <Navigation/>

      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/contact" component={Contact}/>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
