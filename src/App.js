import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import routes from './routes';
import Homepage from './components/Homepage';
import Header from './components/Header';
import AddBook from './components/AddBook';


const switchRoutes = (
  <Switch>
    {routes
      .map((prop, key) => (
        <Route
          exact
          path={prop.path}
          component={prop.component}
          key={key}
        />
      ))}
  </Switch>
);

class App extends Component  {
    render (){
    return(
  <Provider store={store}>
    <Router>
      <div>
        {switchRoutes}
      </div>
    </Router>  
  </Provider>  
);}}

export default App;