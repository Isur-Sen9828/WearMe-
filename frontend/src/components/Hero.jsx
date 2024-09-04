import { MdOutlineLocalOffer } from "react-icons/md"
import { NavLink } from "react-router-dom"
import {FaStar} from "react-icons/fa"


function Hero() {
  return (
    <section className="relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full ">
        <div className="max_padd_container relative top-32 xs:top-52">
            <h1 className="h1 capitalize max-w-[37rem]"><span className="text-secondary">|</span>WearMe <br /> Wear Glare </h1>
            <p className="text-gray-50 regular-16 mt-6 max-w-[33rem]"><span className=" h3">Step into the Spotlight with Us✨</span> <br />
            Elevate your wardrobe with our latest collection of bold, fashion-forward pieces that shine as bright as you do. 
            Whether you're looking to make a statement or add a touch of glam to your everyday look, Wear Glare has you covered. 
            Discover the trends that turn heads and reflect your unique style. Ready to shine? Shop now and let your wardrobe do the talking.</p>
            <div className="flexStart !items-center gap-x-4 my-10">
                <div className="!regular-24 flexCenter gap-x-3">
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                    <FaStar/>
                </div>
                    <div className="bold-16 sm:bold-20">176k 
                        <span className="regular-16 sm:regular-20">Excelent Review</span>
                    </div>
                    <div className="max-xs:flex-col flex gap-2 ">
                        <NavLink to={''} className={"btn_dark_rounded flexCenter"}>Shop Now</NavLink>
                        <NavLink to={''} className={"btn_dark_rounded flexCenter gap-x-2"}><MdOutlineLocalOffer className="text-xl"/>Offer</NavLink>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Hero