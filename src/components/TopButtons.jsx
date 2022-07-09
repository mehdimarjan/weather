import React from "react";

function TopButtons({ setQuery }) {
  const cities = [
    {
      id: 1,
      title: "خرمشهر",
    },
    {
      id: 2,
      title: "آبادان",
    },
    {
      id: 3,
      title: "اهواز",
    },
    {
      id: 4,
      title: "تهران",
    },
    {
      id: 5,
      title: "رشت",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium transition ease-in-out duration-300 hover:text-neutral-700"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
}

export default TopButtons;
