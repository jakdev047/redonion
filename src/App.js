import React from 'react';

// store
import { Provider } from 'react-redux';
import store from './store';

// style
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/sass/index.scss'

// component
import Header from './components/Header/Header';
import HomeFoods from './components/HomeFoods/HomeFoods';

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <HomeFoods />
      </div>
    </Provider>
  );
}

export default App;
