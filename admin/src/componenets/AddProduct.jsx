import upload_area from '../assets/upload_area.png';
import { MdAdd } from 'react-icons/md';
import { useState } from 'react';

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    new_price: "",
    old_price: "",
    category: "women",
  });


  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };

  const Add_Product = async () => {
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append('product', image);

    try {
      await fetch("http://localhost:4000/upload", {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })
        .then((resp) => resp.json())
        .then((data) => { responseData = data });

      if (responseData.success === 1) {
        product.image = responseData.image_url;
        console.log(product);
        await fetch('http://localhost:4000/product/addproduct', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(product),
        }).then((resp) => resp.json()).then((data) => {
          if (data.success) {
            alert("Product Added!");
            console.log(product);
            setImage(false); 
            setProductDetails({
              name: "",
              image: "",
              new_price: "",
              old_price: "",
              category: "women",
            }); 
          } else {
            alert("Upload Failed!");
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7">
      <form>
        <div className="mb-3">
          <h4 className="bold-18 pb-2">Product Title:</h4>
          <input
            type="text"
            name="name"
            placeholder="Type here..."
            value={productDetails.name}
            onChange={changeHandler}
            className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
          />
        </div>
        <div className="mb-3">
          <h4 className="bold-18 pb-2">Price:</h4>
          <input
            type="text"
            name="old_price"
            placeholder="Type here..."
            value={productDetails.old_price}
            onChange={changeHandler}
            className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
          />
        </div>
        <div className="mb-3">
          <h4 className="bold-18 pb-2">Offer price:</h4>
          <input
            type="text"
            name="new_price"
            value={productDetails.new_price}
            onChange={changeHandler}
            placeholder="Type here..."
            className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md"
          />
        </div>
        <div className='mb-3 flex items-center gap-x-4'>
          <h4 className='bold-18 pb-2'>Product Category</h4>
          <select
            name="category"
            value={productDetails.category}
            onChange={changeHandler}
            className="bg-primary ring-1 ring-slate-900/20 medium-16 rounded-sm outline-none h-10"
          >
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option value="kid">Kid</option>
          </select>
        </div>
        <div>
          <label htmlFor="file_input">
            <img
              src={image ? URL.createObjectURL(image) : upload_area}
              alt="Upload"
              className='w-20 rounded-sm inline-block'
            />
          </label>
          <input
            onChange={imageHandler}
            type="file"
            name='image'
            id="file_input"
            hidden
            className='bg-primary max-w-80 w-full py-3 px-4'
          />
        </div>
        <button
          type="button"
          onClick={() => Add_Product()}
          className='btn_dark_rounded mt-4 flexCenter gap-x-1'>
          <MdAdd />Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;












// import upload_area from '../assets/upload_area.png';
// import {MdAdd} from 'react-icons/md';
// import { useState } from 'react';

// const AddProduct = () => {

//     const [image, setImage] = useState(false);
//     const [productDetails, setProductDetails] = useState({
//         name:"",
//         image:"",
//         new_price:"",
//         old_price:"",
//         category:"women",
//     })
    
//     const imageHandler = (e) => {
//         setImage(e.target.files[0]);
//     };

//     const changeHandler = (e) => {
//         setProductDetails({...productDetails, [e.target.name]:e.target.value})
//     }

//     const Add_Product = async() => {

//         let responseData;
//         let product = productDetails;

//         let formData = new FormData();
//         formData.append('product', image);

//         try {
//             await fetch("http://localhost:4000/upload", {
//                 method: 'POST',
//                 headers:{
//                     Accept: 'application/json',
//                 },
//                 body:formData,
//             }).then((resp) => resp.json()).then((data) => {responseData = data})
            
//             if (responseData.success === 1) {
//                product.image = responseData.image_url;
//                console.log(product);
//                await fetch('http://localhost:4000/product/addproduct', {
//                 method:'POST',
//                 headers: {
//                     Accept: 'application/json',
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(product),
//                }).then((resp) => resp.json()).then((data) => {
//                 data.success?alert("Product Added!")&&console.log(product)
//                 :alert("Upload Faild!")
//                })

//             }
//         } catch (error) {
//             console.log(error);
//         }
//     }

//   return (
//     <div className=" p-8 box-border bg-white w-full rounded-sm mt-4 lg:m-7">
//         <div className="mb-3">
//             <h4 className="bold-18 pb-2">Product Title:</h4>
//             <input type="text" 
//             name="name" 
//             placeholder="Type here..." 
//             value={productDetails.name}
//             onChange={changeHandler}
//             className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md" />
//         </div>
//         <div className="mb-3">
//             <h4 className="bold-18 pb-2">Price:</h4>
//             <input type="text" 
//             name="old_price" 
//             placeholder="Type here..."
//             value={productDetails.old_price}
//             onChange={changeHandler}
//             className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md" />
//         </div>
//         <div className="mb-3">
//             <h4 className="bold-18 pb-2">Offer price:</h4>
//             <input type="text" 
//             name="new_price" 
//             value={productDetails.new_price}
//             onChange={changeHandler}
//             placeholder="Type here..." 
//             className="bg-primary outline-none max-w-80 w-full py-3 px-4 rounded-md" />
//         </div>
//         <div className='mb-3 flex items-center gap-x-4'>
//             <h4 className='bold-18 pb-2'>Product Category</h4>
//             <select name="category" id="" 
//             value={productDetails.category}
//             onChange={changeHandler}
//             className="bg-primary ring-1 ring-slate-900/20 medium-16 rounded-sm outline-none h-10">
//                 <option value="women">Women</option>
//                 <option value="men">Men</option>
//                 <option value="kid">Kid</option>
//             </select>
//         </div>
//         <div>
//             <label htmlFor="file_input"> 
//                 <img src={image?URL.createObjectURL(image):upload_area} 
//                 alt="Upload" className='w-20 rounded-sm inline-block' /> 
//             </label>
//             <input onChange={imageHandler} type="file" name='image' id="file_input" 
//             hidden className='bg-primary max-w-80 w-full py-3 px-4' />
//         </div>
//         <button onClick={() => Add_Product()}
//         className='btn_dark_rounded mt-4 flexCenter gap-x-1'>
//             <MdAdd/>Add Product</button>
//     </div>
//   )
// }

// export default AddProduct