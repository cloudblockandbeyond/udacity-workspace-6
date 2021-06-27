import React from 'react';
import logo from './logo.svg';
import './App.css';
import AddtoCart from './AddToCart';
import RemoveFromCart from './RemoveFromCart';
import Basket from './Basket';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    };
  }

  handleAddToCart = (product) => {
    this.setState((currentState) => ({
      products: [...currentState.products, product.productname]
    }));
  };

  handleDeleteLastItem = () => {
    this.setState((currentState) => ({ 
      products: currentState.products.slice(0, -1)
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <AddtoCart onAddToCart={ this.handleAddToCart }/>
        <RemoveFromCart products={ this.state.products } onDeleteLastItem={ this.handleDeleteLastItem } />
        <Basket products={ this.state.products }/>
      </div>
    );
  }
}

export default App;
