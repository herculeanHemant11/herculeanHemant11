import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  return (
    <div className="body-contaner">
      <div className="container">
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              console.log("Button clicked");
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="row">
          {resList.map((card) => {
            return <RestaurantCard key={card.info.id} resData={card} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Body;
