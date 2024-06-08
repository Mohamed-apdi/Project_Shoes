import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaCirclePlay } from "react-icons/fa6";
import { FaStarOfLife } from "react-icons/fa";
import { motion } from "framer-motion";
import { PiTelegramLogoFill } from "react-icons/pi";

const Home = () => {
  return (
    <>
      <motion.section
        className="container p-2 max-w-screen-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex gap-4">
          <div className="w-4/6 bg-gray-200 rounded-md py-8 px-6">
            <div className="flex gap-1 items-center">
              <FaStar className="w-4 text-yellow-500" />
              <FaStar className="w-4 text-yellow-500" />
              <FaStar className="w-4 text-yellow-500" />
              <FaStar className="w-4 text-yellow-500" />
              <FaStarHalfAlt className="w-4 text-yellow-500" />
              <p className="font-bold">100+ reviews</p>
            </div>
            <div className="py-3">
              <p className="font-extrabold text-7xl">
                Step into Style <br /> Your Ultimate <br /> Sheo Haven
              </p>
            </div>
            <div className="mt-20 flex items-center gap-4">
              <button className="py-2 px-4 bg-black text-white rounded-3xl">
                START YOUR JOUR
              </button>
              <div className="flex items-center gap-4">
                <FaCirclePlay className="text-4xl" />
                <p className="font-semibold">
                  LUXURY FITNESS <br /> EXPERIENCE
                </p>
              </div>
            </div>
          </div>
          <img
            className="w-2/6 bg-black rounded-md"
            src="/public/images/nike rtx.jpg"
            alt="img"
          />
        </div>
      </motion.section>
      <motion.section
        className="container p-2 max-w-screen-xl"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex gap-4">
          <div className="w-1/4 rounded-md bg-[#e4e5b9] p-4">
            <div className="flex justify-between items-center font-semibold gap-4">
              <h5 className="text-sm">Air Jordan 6 Retro White/Black</h5>
              <p className="text-sm">$200</p>
            </div>
            <div>
              <img
                className="w-60"
                src="/public/images/air-jordan-6-removebg.png"
                alt=""
              />
            </div>
            <div className="flex justify-between items-center">
              <div className="size">
                <span className="px-1.5 py-1.5 border-[1.5px] border-black rounded-full mr-2">
                  38
                </span>
                <span className="px-2 py-2 bg-black text-white rounded-full mr-2">
                  40
                </span>
                <span className="px-1.5 py-1.5 border-[1.5px] border-black rounded-full">
                  38
                </span>
              </div>
              <button className="py-1 px-4 bg-black text-white rounded-3xl">
                Add to bag
              </button>
            </div>
          </div>
          <div className="w-1/4 rounded-md bg-[#f3e0d2] p-4">
            <div className="flex justify-between items-center font-semibold gap-4">
              <h5 className="text-sm">Nike Air Max Plus</h5>
              <p className="text-sm">$150</p>
            </div>
            <div>
              <img
                className="w-60 h-32"
                src="/public/images/air-max-plus-mens-removebg.png"
                alt=""
              />
            </div>
            <div className="flex justify-between items-center mt-8">
              <div className="size">
                <span className="px-1.5 py-1.5 border-[1.5px] border-black rounded-full mr-2">
                  38
                </span>
                <span className="px-2 py-2 bg-black text-white rounded-full mr-2">
                  40
                </span>
                <span className="px-1.5 py-1.5 border-[1.5px] border-black rounded-full">
                  38
                </span>
              </div>
              <button className="py-1 px-4 bg-black text-white rounded-3xl">
                Add to bag
              </button>
            </div>
          </div>
          <div className="w-2/4 rounded-md bg-[#e8e4fd] p-4">
            <h3 className="text-2xl font-semibold scroll-m-20 tracking-tight lg:text-4xl">
              Your Premier Shoe Destination
            </h3>
            <p className="leading-7">
              Step into a world where every stride is a statement, and style
              meets unparalleled quality.
            </p>
            <div className="flex gap-4 mt-8">
              <FaStarOfLife className="text-[#9e93d5] text-6xl" />{" "}
              <h1 className="text-6xl font-extrabold">2024</h1>
            </div>
          </div>
        </div>
      </motion.section>
      <div className="flex justify-between px-2">
        <p className="font-bold text-[40px]">Blog Post</p>
        <div className="flex justify-center items-center">
          <button className="bg-black text-white p-2 rounded-full px-4 hover:text-gray-300">
            Explore more
          </button>
        </div>
      </div>
      <section className="shoes container p-2 max-w-screen-xl flex gap-4">
        <div className="w-1/3 bg-gray-200 flex flex-col items-center py-4 px-0 rounded-xl">
          <img
            className=" w-[280px] h-[180px] rounded-lg"
            src="/public/images/nike rtx.jpg"
            alt=""
          />
          <div className=" mr-36">
            <p className="font-bold mt-1">NIKE AIR MAX 90</p>
          </div>
        </div>
        <div className="w-1/3 bg-gray-200 flex flex-col items-center py-4 px-0 rounded-xl">
          <img
            className=" w-[280px] h-[180px] rounded-lg"
            src="/public/images/nike rtx.jpg"
            alt=""
          />
          <div className=" mr-36">
            <p className="font-bold mt-1">NIKE AIR MAX 90</p>
          </div>
        </div>
        <div className="w-1/3 bg-gray-200 flex flex-col items-center py-4 px-0 rounded-xl">
          <img
            className=" w-[280px] h-[180px] rounded-lg"
            src="/public/images/nike rtx.jpg"
            alt=""
          />
          <div className=" mr-36">
            <p className="font-bold mt-1">NIKE AIR MAX 90</p>
          </div>
        </div>
      </section>
      <motion.section>
        <section className="sign-up-letter container  max-w-screen-xl p-2 flex gap-2">
          <div className="bg-gray-200 w-1/2 rounded-xl flex flex-col items-center justify-center">
            <PiTelegramLogoFill className="mt-12 text-[24px]" />
            <p className="text-[30px] font-bold">Sign up for our newsletter</p>
            <div className="flex mt-3">
              <input
                className="bg-gray-100 border-[2px] border-black w-[300px] rounded-tl-lg rounded-bl-lg placeholder:pl-3 placeholder:text-black"
                type="text"
                placeholder="Enter your email..."
              />
              <button className="bg-black text-white p-2 rounded-tr-lg rounded-br-lg px-8 ">
                Submit
              </button>
            </div>
            <p className="text-[14px] px-12 py-4 pl-14 pb-14">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
              corrupti fugiat totam consequatur dolores eos sint amet corporis
            </p>
          </div>
          <div className="bg-black w-1/2 rounded-xl">M</div>
        </section>
      </motion.section>
    </>
  );
};

export default Home;
