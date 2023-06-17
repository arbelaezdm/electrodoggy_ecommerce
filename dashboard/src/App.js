import React from 'react';
import './App.css';
import { Route, Switch} from 'react-router-dom'


import Menu from "./components/Menu"
import Content from "./components/Content"
import Categories from "./components/Categories"
import Products from "./components/Products"
import Users from "./components/Users"
import NotFound from './components/NotFound';

function App() {
  return (
    <React.Fragment>
      	<div>
          <Menu />
            <Switch>
              <Route exact path="/" component={Content} />
              <Route path="/categories" component={Categories} />
              <Route path="/products" component={Products} />
              <Route path="/users" component={Users} />
              <Route component={NotFound} />
          </Switch>
        </div>
    </React.Fragment>
  );
}

export default App;
