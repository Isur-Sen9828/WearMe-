import logo from '../assets/logo.svg'
import profilephoto from '../assets/profile.png'

export const Navbar = () => {
  return (
    <nav className="max_padd_container flexBetween bg-white py-2 ring-1 ring-slate-900/5 relative">
      <div><img src={logo} alt="" /></div>
      <div className="uppercase bg-secondary text-white p-3 rounded-lg tracking-widest line-clamp-1 max-xs:bold-18">Admin panel</div>
      <div><img src={profilephoto} alt="" className="h-12 w-12 rounded-full"/></div>

    </nav>
  )
}
