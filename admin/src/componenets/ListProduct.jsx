import {useState, useEffect} from 'react'
import {TbTrash} from 'react-icons/tb'

const ListProduct = () => {

  const [allproducts, setAllProducts] = useState([]);

  const fetchInfo = async () => {
    await fetch('http://localhost:4000/product/allproducts')
    .then((res) => res.json()).then((data) => {setAllProducts(data)});
  }

  useEffect(() => {
    fetchInfo();
  
  }, [])
  
  const RemoveProduct = async(id) => {
  await fetch('http://localhost:4000/product/removeproduct',{
    method:'POST',
      headers:{
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({id:id})
  })
  await fetchInfo();
  }

  return (
    <div className="p-2 bg-white box-border rounded-sm mb-0 w-full mt-4 sm:p-4 sm:m-7">
      <h4 className="uppercase p-5 bold ">Product List</h4>
      <div className="max-h-[77vh] overflow-auto px-4 text-center">
        <table className="w-full mx-auto sm:regular-22 text-start py-12">
        <thead>
          <tr className="bg-primary bold-14">
            <th className="p-2">Product</th>
            <th className="p-2">Title</th>
            <th className="p-2">Old Price</th>
            <th className="p-2">New Price</th>
            <th className="p-2">Category</th>
            <th className="p-2">Remove</th>
          </tr>
        </thead>
        <tbody>
          {allproducts.map((product, i) =>(
            <tr key={i} className="border-b text-gray-30 border-slate-900/30  p-6 medium-14">
              <td className="flexStart sm:flexCenter ">
                <img src={product.image} alt="" height={43} width={43} className="rounded-lg ring-1 ring-slate-900/5"/>
              </td>
              <td><div className="line-clamp-3">{product.name}</div></td>
              <td>${product.old_price}</td>
              <td>${product.new_price}</td>
              <td>{product.category}</td>
              <td className=""><div className="bold-22 pl-2 sm:pl-14 cursor-pointer"><TbTrash onClick={()=>RemoveProduct(product.id)}/></div></td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  )
}
export default ListProduct