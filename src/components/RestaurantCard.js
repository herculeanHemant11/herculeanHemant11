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
    <div className="res-card-wrap">
      <div className="res-card" style={cardBg}>
        <div
          className="res-card-img"
          style={{
            backgroundImage: `url(
              "${CDN_URL + cloudinaryImageId}")`,
          }}
        ></div>
        <h4>{name}</h4>
        <h5>{cuisines.join(", ")}</h5>
        <h6>{avgRating} stars</h6>
        <h6>{deliveryTime} Minutes</h6>
      </div>
    </div>
  );
};

export default RestaurantCard;
