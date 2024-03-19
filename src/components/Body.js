import React, { useEffect, useState } from "react";
import RestaurantCard, { vegRestaurant } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import resList from "../utils/mockData";

const Body = () => {
  // Use state to manage the current list of restaurants

  const [restaurantList, setRestaurantList] = useState([]);

  const [searchRestaurantList, setSearchRestaurantList] = useState([]);

  const VegRestaurantCard = vegRestaurant(RestaurantCard);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5535&lng=77.2588&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();
    console.log(jsonData);
    setRestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setSearchRestaurantList(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (!onlineStatus) return <h1>You're Offline</h1>;
  //Conditional Rendering

  return restaurantList.length === 0 ? (
    <div className="container m-auto">
      <div className="row">
        {/* Shimmer loading placeholders */}
        {[...Array(12)].map((_, index) => (
          <Shimmer />
        ))}
      </div>
    </div>
  ) : (
    <div className="body-container">
      <div className="container m-auto px-4">
        <div className="filter flex items-center">
          <div className="search py-4">
            <input
              type="text"
              className="search-box border border-solid border-black-400 p-[7px]"
              value={searchText}
              onChange={(event) => {
                setSearchText(event.target.value);
              }}
            />
            <button
              className="search-btn bg-green-100 px-4 py-2 ml-4"
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
            className="filter-btn bg-green-400 px-4 py-2 ml-8"
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
        <div className="flex flex-wrap -m-4">
          {/* Map through the current restaurantList to display RestaurantCard components */}
          {searchRestaurantList.map((card) => (
            <Link
              to={"restaurants/" + card.info.id}
              key={card.info.id}
              className="w-full sm:w-1/2 lg:w-1/4 my-4"
            >
              {card.info.veg ? (
                <VegRestaurantCard resData={card} />
              ) : (
                <RestaurantCard resData={card} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
