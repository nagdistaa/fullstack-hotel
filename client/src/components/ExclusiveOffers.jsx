import { assets, exclusiveOffers } from "../assets/assets";
import Title from "./Title";

const ExclusiveOffers = () => {
  return (
    <div className=" flex flex-col items-center px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-30">
      <div className="flex flex-col md:flex-row items-center justify-between w-full">
        <Title
          align={"left"}
          subTitle={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore, quod?"
          }
          title={"Exclusive Offers"}
        />
        <button className="group flex items-center gap-2 font-medium cursor-pointer max-md:mt-12">
          view all offers
          <img
            src={assets.arrowIcon}
            alt=""
            className="group-hover:translate-x-1 transition-all"
          />
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {exclusiveOffers.map((item) => (
          <div
            className={
              "group relative flex flex-col items-start justify-between gap-1 pt-12 md:pt-18 px-4 rounded-xl text-white bg-no-repeat bg-cover bg-center"
            }
            style={{ backgroundImage: `url(${item.image})` }}
            key={item._id}
          >
            <p className=" px-3 py-1 absolute top-4 left-4 text-xs bg-white text-gray-800 font-medium rounded-full">
              {item.priceOff} %OFF
            </p>
            <div className="">
              <p className="text-2xl font-medium ">{item.title}</p>
              <p className="">{item.description}</p>
              <p className="text-xs text-white/50 mt-3">
                Expires {item.expiryDate}
              </p>
            </div>
            <button className="flex items-center gap-2 font-medium cursor-pointer mt-4 mb-5">
              View Offers
              <img
                src={assets.arrowIcon}
                alt=""
                className=" invert group-hover:translate-x-1 transition-all duration-300"
              />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExclusiveOffers;
