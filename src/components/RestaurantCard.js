import { CDN_URL } from "../utils/constants";

const cardBg = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = (props) => {
  //destructuring
  const { resData } = props;
  //destructuring and optional chaining

  const { name, cloudinaryImageId, cuisines, avgRating, sla } = resData?.info;
  const { deliveryTime } = sla;
  return (
    <div
      className="rounded-lg res-card p-4 m-4 h-full hover:drop-shadow-xl ease-in-out duration-200"
      style={cardBg}
    >
      <div
        className="res-card-img pb-[56.25%] bg-cover bg-center mb-4"
        style={{
          backgroundImage: `url(
              "${CDN_URL + cloudinaryImageId}")`,
        }}
      ></div>
      <h4 className="font-bold text-lg mb-2">{name}</h4>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{avgRating} stars</h6>
      <h6>{deliveryTime} Minutes</h6>
    </div>
  );
};

export const vegRestaurant = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="h-full">
        <label className="absolute bg-black text-white ml-4 p-2 rounded-lg z-10">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
