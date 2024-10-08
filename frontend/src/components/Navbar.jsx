import { NavLink } from "react-router-dom"
import {MdCategory, MdContacts, MdHomeFilled, MdShop} from "react-icons/md"


// eslint-disable-next-line react/prop-types
const Navbar = ({containerStyles}) => {
  return (
<nav className={`${containerStyles}`}>
    <NavLink to={'/'}className={({isActive})=> isActive? "active_link" : ""}><div className="flexCenter gap-x-1"><MdHomeFilled/>Home</div></NavLink>
    <NavLink to={'/mens'}className={({isActive})=> isActive? "active_link" : ""}><div className="flexCenter gap-x-1"><MdCategory/>Men</div></NavLink>
    <NavLink to={'/womens'}className={({isActive})=> isActive? "active_link" : ""}><div className="flexCenter gap-x-1"><MdShop/>Women</div></NavLink>
    <NavLink to={'/kids'}className={({isActive})=> isActive? "active_link" : ""}><div className="flexCenter gap-x-1"><MdContacts/>Kid's</div></NavLink>

</nav>  

)
}

export default Navbar