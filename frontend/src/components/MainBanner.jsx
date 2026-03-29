import { Link } from "react-router-dom";
import {assets}  from "../assets/assets";
const MainBanner = () => {
  return (
    <div className="]">
      <div className="relative ">
        <img
          src={assets.main_banner_bg}
          alt="mainbanner"
          className="hidden md:block py-18 w-full"
        />
        <img
          src={assets.main_banner_bg_sm}
          alt="smallbanner"
          className="md:hidden  w-full h-full mt-16"
        />
        <div className="   absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24 ">
          <div className=" text-2xl md:text-4xl tracking-wide font-bold  max-w-lg">
            <h1>Freshness You Can Trust,Savings You will Love!</h1>
          </div>

          <div className="flex gap-4 mt-6">
            <Link
              to="/products"
              className=" bg-primary px-4 py-2 text-white w-36 rounded-sm hover:bg-primary-dull flex gap-2 "
            >
              Shop Now{" "}
              <img
                src={assets.white_arrow_icon}
                alt="arrow"
                className="h-4  w-4  mt-1.5 ml-2 inline-block"
              />
            </Link>
            <Link className="hidden md:flex gap-2  px-4 py-2   hover:scale-105 transition items-center  font-medium  ">
              Explore deals{" "}
              <img
                src={assets.black_arrow_icon}
                alt="arrow"
                className="h-4 inline-block mt-1.5  w-4  ml-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner