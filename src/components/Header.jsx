import { Heart, Search } from "lucide-react"
import { CgShoppingBag } from "react-icons/cg";


const Header = () => {
  return (
   <>
    <div className=" container py-4">
        <div className="flex justify-around items-center ">
            <div className="logo text-2xl font-bold">Jacar</div>
            <div className="search relative items-center w-1/4 ">
                <input className="border p-2 rounded-md w-full bg-gray-200 pl-6 text-sm outline-none" type="text" placeholder="product search here.."/>
                <Search className=" absolute top-2 w-4 left-1.5 text-gray-500"/>
            </div>
            <div className="flex justify-between gap-5">


                <div className="flex flex-col items-center">
                <div  className="cart relative">
                <CgShoppingBag className="text-2xl" />
                <span className="items-center absolute top-[-14px] right-[-8px] rounded-full border px-[7px] bg-yellow-300 py-[1.5px] text-xs font-semibold transition-colors ">4</span>
                </div>
                <p className="text-sm font-semibold">cart</p>
                </div>

                <div className="flex flex-col items-center">
                <div  className="wishlist">
                <Heart className="text-2xl" />
                
                </div>
                <p className="text-sm font-semibold">Favorite</p>
                </div>
                <div className="profile">
                    <img className="w-10 h-10 rounded-full" src="/public/images/sheos.jpg" alt="profile" />
                </div>
            </div>
        </div>
    </div>
   </>
  )
}

export default Header