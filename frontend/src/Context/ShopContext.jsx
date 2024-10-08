import { createContext, useEffect, useState } from "react";
// import all_products from "../assets/all_products";//1

export const ShopContext = createContext(null);

    const getDefaultCart = () => {
        let cart = {};
        for (let index = 0; index < 300 + 1; index++) {
            cart[index] = 0;
        }
        return cart;
    }

    
const ShopContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart());
    const [all_products, setall_products] = useState([]);//1

    useEffect(() =>{
        fetch("http://localhost:4000/product/allproducts").then((response) => response.json()).then((data) => setall_products(data))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/cart/getcart',{
                method:'POST',
                headers:{
                    Accept: 'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json'
                },
                body:""
            }).then((response)=> response.json()).then((data)=>setCartItems(data))
        }
    },[])

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        //setdata to the backend
        if(localStorage.getItem('auth-token')){
            fetch("http://localhost:4000/cart/addtocart",{
                method:'POST',
                headers:{
                    Accept: 'application/form-data',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            }).then((response) => response.json()).then((data) => console.log(data));
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev, [itemId]:prev[itemId]-1}))
        if (localStorage.getItem('auth-token')){
            fetch("http://localhost:4000/cart/removefromcart", {
                method:'POST',
                headers:{
                    Accept:'application/json',
                    'auth-token':`${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body:JSON.stringify({"itemId":itemId}),
            }).then((response)=> response.json()).then((data)=> console.log(data));
        }
    }
    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item]>0) {
                let itemInfo = all_products.find((product)=> product.id === Number(item));
                totalAmount += itemInfo.new_price*cartItems[item];
            }
        }
        return totalAmount;
    }

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }            
        }
        return totalItems;
    }

    const contextValue = {getTotalCartItems, getTotalCartAmount, all_products, cartItems, addToCart, removeFromCart};

    return(
        <ShopContext.Provider value = {contextValue}>
            {props.children}
            </ShopContext.Provider>
    )
}
 export default ShopContextProvider;