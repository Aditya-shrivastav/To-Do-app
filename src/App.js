import React , { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './Components/Main';
import './App.css';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

class App extends Component{
  
  render(){
    return (
      <Provider store={store}>
        <div>
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/">ToDo app</NavbarBrand>
            </div>
          </Navbar>
          <Main/>
        </div>
      </Provider>
    );
  }
}

export default App;
