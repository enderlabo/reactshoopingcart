import { FETCH_PRODUCTS } from "../../types/types";

export const productsAction = () => async ( dispatch ) => {
    
    const res = await fetch("/api/products");
    //Get data to contains all products
    const data = await res.json();
    console.log(data);
  
    dispatch({
        type: FETCH_PRODUCTS,
        payload: data
    });

}