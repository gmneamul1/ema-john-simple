import { getStoredCart } from "../utilities/fakedb";

export const ProductsAndCartLoader = async () => {
    const productData = await fetch ('products.json');
    const products = await productData.json();



    const savedCart = getStoredCart();
    // console.log(savedCart)
    const  initialCart = []
    for(const id in savedCart){
        const addedProduct = products.find(product => product.id === id);
        // console.log(addedProduct)
        if(addedProduct){
            const quantity =savedCart[id];
            addedProduct.quantity = quantity;
             initialCart.push(addedProduct)
        }


    }

    return {products: products,  initialCart:  initialCart}

}