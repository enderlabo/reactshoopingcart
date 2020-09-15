import React, { Component } from 'react'
import { formatCurrency } from '../../utils/formatCurrency'

export default class ProductList extends Component {
   render() {
      return (
         <div>
            <ul className="products">
               {
                  this.props.products.map( product => (
                     <li key={ product._id }>
                        <div className="product">
                           <a href="#">
                              <img src={ product.image } alt={ product.title } />
                              <p>{ product.title }</p>
                              
                           </a>
                        <div className="product-price">
                           <div>
                              { formatCurrency (product.price) }
                              <p>{ product.size }</p>
                           </div>
                           <button className="button primary">
                                 Add to Cart
                           </button>
                        </div>
                        </div>
                     </li>
                  ) )
               }
            </ul>
         </div>
      )
   }
}
