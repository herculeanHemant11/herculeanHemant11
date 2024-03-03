import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
// import resList from "../utils/mockData";

const Body = () => {
  // Use state to manage the current list of restaurants

  const [restaurantList, setRestaurantList] = useState([]);

  const [searchRestaurantList, setSearchRestaurantList] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5535&lng=77.2588&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    setRestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchRestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  //Conditional Rendering

  return restaurantList.length === 0 ? (
    <div className="container">
      <div className="row">
        {/* Shimmer loading placeholders */}
        {[...Array(12)].map((_, index) => (
          <Shimmer />
        ))}
      </div>
    </div>
  ) : (
    <div className="body-container">
      <div className="container">
        <div className="filter">
          <div className="search">
            <input
              type="text"
              className="search-box"
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            />
            <button
              className="search-btn"
              onClick={() => {
                const searcedRestaurant = restaurantList.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setSearchRestaurantList(searcedRestaurant);
              }}
            >
              Search
            </button>
          </div>
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
          {searchRestaurantList.map((card) => (
            <RestaurantCard key={card.info.id} resData={card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
