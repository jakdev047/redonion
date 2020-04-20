import React from 'react';
import {BrowserRouter as Router,Switch,Route,} from "react-router-dom";

// store
import { Provider } from 'react-redux';
import store from './store';

// style
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/index.scss'

// component
import Header from './components/Header/Header';
import Home from './views/Home';
import Error from './views/Error';
import SingleFoodItem from './views/SingleFoodItem';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/foods/:id" component={SingleFoodItem}></Route>
            <Route path="*" component={Error}></Route>
          </Switch>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
