import { useContext } from "react"
import { ShopContext } from "../Context/ShopContext"
import { useParams } from "react-router-dom";
import ProductHD from "../components/ProductHD";
import ProductDisplay from "../components/ProductDisplay";
import ProductDescription from "../components/ProductDescription";
import RelatedProducts from "../components/RelatedProducts";


const Product = () => {
  const {all_products} = useContext(ShopContext);
  const {productId} = useParams();
  const product  = all_products.find((e) => e.id === Number(productId));
  if (!product) {
    return <div>Product not found!</div>
  }
  return (
    <section className="max_padd_container py-28">
      <div>
        <ProductHD product={product}/>
        <ProductDisplay product={product}/>
        <ProductDescription/>
        <RelatedProducts/>
      </div>
    </section>
  )
}
export default Product;

// import { useContext } from "react";
// import { ShopContext } from "../Context/ShopContext";
// import { useParams } from "react-router-dom";
// import ProductHD from "../components/ProductHD";

// const Product = () => {
//   const { all_products } = useContext(ShopContext);
//   const { productId } = useParams();

//   // Handle the case where `all_products` is undefined or null
//   if (!all_products || all_products.length === 0) {
//     return <div>Loading products...</div>;
//   }

//   const product = all_products.find((e) => e.id === Number(productId));

//   if (!product) {
//     return <div>Product not found!</div>;
//   }

//   return (
//     <section>
//       <div>
//         <ProductHD product={product} />
//       </div>
//     </section>
//   );
// };

// export default Product;