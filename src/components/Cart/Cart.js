import React, { Component } from 'react'
import { formatCurrency } from '../../utils/formatCurrency';

export default class Cart extends Component {
    constructor(props){
        super(props)
        this.state= { 
            showCheckout: false,
            name: "",
            email: "",
            address: "" 
        }

    }

    handleInput = (e) => {
        this.setState({ [ e.target.name ]: e.target.value });
    }

    createOrder = (e) => {
        e.preventDefault();
        const order = {
            name: this.state.name,
            email: this.state.email,
            address: this.state.address,
            cartItems: this.props.cartItems
        }

        this.props.createOrder(order);
    }

    render() {
        const { cartItems } = this.props;

       
        return (
            <div>
                { cartItems.length === 0 ? (
                <div className="cart cart-header"> Cart is empty </div>
                ): (
                <div className="cart cart-header">
                    You have { cartItems.length } in the cart { " " } </div>
            )}
                <div className="cart">
                    <ul className="cart-items">
                    { cartItems.map( item => 
                        <li key={ item._id }>
                            <div>
                                <img src={ item.image } alt={ item.title } />
                            </div>

                            <div>
                                <div>{ item.title }</div>
                                { formatCurrency( item.price ) } x { item.count } { " " }
                                <div className="right">
                                    <button className="button" 
                                    onClick={ () => this.props.removeFromCart(item) }>
                                        Remove
                                    </button>
                                </div>
                            </div>
                        </li>) }
                    </ul>
                </div>
                { cartItems.length !== 0 && (
                    <div>
                    <div className="cart">
                        <div className="total">
                            <div>
                                Total: { " " }
                                { formatCurrency (
                                    cartItems.reduce( (a,c) => a + c.price * c.count, 0 )) 
                                }
                            </div>
                            <div className="total">
                                <button onClick={ () => this.setState({ showCheckout: true }) } className="button primary">Proceed</button>
                            </div>
                        </div>
                    </div>

                    { this.state.showCheckout && (
                        <div className="cart">
                            <form className="" onSubmit={ this.createOrder }>
                                <ul className="form-container">
                                    <li>
                                        <label>Email</label>
                                        <input type="email" 
                                            name="email" 
                                            required 
                                            onChange= { this.handleInput } />
                                    </li>

                                    <li>
                                        <label>Name</label>
                                        <input type="text" 
                                            name="name" 
                                            required 
                                            onChange= { this.handleInput } />
                                    </li>

                                    <li>
                                        <label>Address</label>
                                        <input type="text" 
                                            name="address" 
                                            required 
                                            onChange= { this.handleInput } />
                                    </li>

                                    <li>
                                        <button type="submit" className="button primary"> Checkout</button>
                                    </li>
                                </ul>
                            </form>
                        </div>
                    ) }
                    </div>
                ) }
            </div>

        )
    }
}
