import React from 'react';
import Cart from './components/Cart/Cart';
import Filter from './components/Filter/Filter';
import ProductList from './components/Products/ProductList';
import dataProducts from './data/dataProducts';


class App extends React.Component {
   constructor(){
      super();
      this.state = {
         products: dataProducts.products,
         cartItems: [],
         size: "",
         sort: ""
      }
   }

   addToCart = (product) => {
      const cartItems = this.state.cartItems.slice();
      let alreadyInCart = false;

      cartItems.forEach( item => {
         if( item._id === product._id ){
            item.count++;
            alreadyInCart = true;
         }
      });

      if( !alreadyInCart ) {
         cartItems.push({ ...product, count: 1 });
      }

       this.setState({ cartItems:cartItems });
   };

   removeFromCart = (product) => {
      const cartItems = this.state.cartItems.slice();

      this.setState({
         cartItems: cartItems.filter( x=> x._id !==product._id )
      })
      
   }

   sortProducts = ( event ) => {
      console.log(event.target.value);
      const sort = event.target.value;
      this.setState( state => ({
         sort: sort ,
         products: this.state.products.slice().sort(( a,b ) => (
            sort === "Lowest"?
            (( a.price > b.price )? 1: -1):

            sort === "Highest"?
            ( ( a.price < b.price )? 1: -1 ):

            (( a._id < b._id )? 1: -1)
         ))
      }))
   }

   filterProducts = (  event ) => {
      console.log(event.target.value);
      if( event.target.value === '' ){
         this.setState({ size: event.target.value, products: dataProducts.products });
      } else {
      this.setState({
            size: event.target.value,
            products: dataProducts.products.filter
            ( product => product.availableSizes.indexOf(event.target.value) >= 0 )
         });
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
                 <Filter count= { this.state.products.length }
                  size= { this.state.size }
                  sort= { this.state.sort }
                  filterProducts={ this.filterProducts }
                  sortProducts= { this.sortProducts }
                 />
                <ProductList products={ this.state.products } 
                  addToCart= { this.addToCart } />
                  
                </div>
                <div className="sideBar"> 
                  <Cart cartItems= { this.state.cartItems }
                  removeFromCart= { this.removeFromCart } /> </div>
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
