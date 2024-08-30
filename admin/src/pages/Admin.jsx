import { Routes, Route } from "react-router-dom"
import Sidebar from "../componenets/Sidebar"
import AddProduct from "../componenets/AddProduct"
import ListProduct from "../componenets/ListProduct"

const Admin = () => {
  return (
    <div className="lg:flex">
        <Sidebar/>
        <Routes>
          <Route path="/addproduct" element={<AddProduct/>}/>
          <Route path="/listproduct" element={<ListProduct/>}/>
        </Routes>
    </div>
  )
}

export default Admin;
