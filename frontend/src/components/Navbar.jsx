import { NavLink } from "react-router-dom"
import {MdCategory, MdContacts, MdHomeFilled, MdShop} from "react-icons/md"


const Navbar = ({containerStyles}) => {
  return (
<nav className={`${containerStyles}`}>
    <NavLink to={'/'}><div className="flexCenter gap-x-1"><MdHomeFilled/>Home</div></NavLink>
    <NavLink to={'/mens'}><div className="flexCenter gap-x-1"><MdCategory/>Men</div></NavLink>
    <NavLink to={'/womens'}><div className="flexCenter gap-x-1"><MdShop/>Women</div></NavLink>
    <NavLink to={'/kids'}><div className="flexCenter gap-x-1"><MdContacts/>Kid's</div></NavLink>

</nav>  

)
}

export default Navbar