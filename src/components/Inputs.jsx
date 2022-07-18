import React, { useState } from "react";
import { UilSearch, UilLocationPoint } from "@iconscout/react-unicons";
import { toast } from "react-toastify";

function Inputs({ setQuery, units, setUnits }) {
  const [city, setCity] = useState("");

  const handleUnitsChange = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (units !== selectedUnit) setUnits(selectedUnit);
  };

  const handleSearchClick = () => {
    if (city !== "") setQuery({ q: city });
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("درحال دریافت موقعیت مکانی کاربر.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("موقعیت مکانی دریافت شد.");
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({
          lat,
          lon,
        });
      });
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center my-6">
      <div className="flex flex-row w-full md:w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="جستجوی شهر..."
          className="text-l font-light p-2 w-full ml-3 shadow-xl focus:outline-none placeholder:text-sm rounded-lg "
        />
        <UilSearch
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleSearchClick}
        />
        <UilLocationPoint
          size={25}
          className="text-white cursor-pointer transition ease-out hover:scale-125"
          onClick={handleLocationClick}
        />
      </div>

      <div className="flex flex-row w-full mt-4 md:mt-0 md:w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-sm text-white font-light transition ease-out hover:scale-105"
          onClick={handleUnitsChange}
        >
          °سانتی‌گراد
        </button>
        <p className="text-md text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-sm text-white font-light transition ease-out hover:scale-105"
          onClick={handleUnitsChange}
        >
          °فارنهایت
        </button>
      </div>
    </div>
  );
}

export default Inputs;
