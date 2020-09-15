import React from 'react';
import ProductList from './components/Products/ProductList';
import dataProducts from './data/dataProducts';


class App extends React.Component {
   constructor(){
      super();
      this.state = {
         products: dataProducts.products,
         size: "",
         sort: ""
      }
   }
 
   render(){

      return (
        <div className="grid-container">
          <header>
            <a href="/">React Shooping Cart</a>
          </header>
    
          <main>
            <div className="content">
              <div className="main">
                <ProductList products={ this.state.products } />
                  
                </div>
                <div className="sideBar"> Cart Items </div>
            </div>
          </main>
    
          <footer>
            All Right Reserved.
          </footer>
        </div>
      );
    }
   }

export default App;
