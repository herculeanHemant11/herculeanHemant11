import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
  // Use state to manage the current list of restaurants
  const [restaurantList, setRestaurantList] = useState(resList);

  return (
    <div className="body-container">
      <div className="container">
        <div className="filter">
          {/* Button to filter and show only top-rated restaurants */}
          <button
            className="filter-btn"
            onClick={() => {
              // Use filter to get only top-rated restaurants (avgRating > 4.3)
              const topRated = restaurantList.filter(
                (res) => res.info.avgRating > 4.3
              );

              // Update the restaurantList state with the filtered data
              setRestaurantList(topRated);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="row">
          {/* Map through the current restaurantList to display RestaurantCard components */}
          {restaurantList.map((card) => (
            <RestaurantCard key={card.info.id} resData={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
