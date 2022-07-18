import "./App.css";
import TopButtons from "./components/TopButtons";
import Inputs from "./components/Inputs";
import TimeAndLocation from "./components/TimeAndLocation";
import TemperatureAndDetails from "./components/TemperatureAndDetails";
import Forecast from "./components/Forecast";
import getFormattedWeatherData from "./services/weatherService";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "Khorramshahr" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";

      toast.info("دریافت اطلاعات آب و هوای " + message);

      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(`اطلاعات آب و هوایی ${data.name} دریافت شد.`);

        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  /*const formatBackground = () => {
    if (!weather) return "from-cyan-700 bg-zinc-200/30	";
    const threshold = units === "metric&lang=fa" ? 20 : 60;
    if (weather.temp <= threshold) return "from-cyan-700 bg-zinc-200/50";
    return "from-yellow-700 to-orange-700";
  };
  */

  return (
    <div className="bg-hero md:py-4">
      <div
        className={`mx-auto max-w-screen-md py-5 px-8 md:px-16 bg-gradient-to-br md:rounded-xl h-fit shadow-xl shadow-gray-600 from-cyan-700/90 bg-zinc-200/50 `}
      >
        <TopButtons setQuery={setQuery} />
        <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

        {weather && (
          <div>
            <TimeAndLocation weather={weather} />
            <TemperatureAndDetails weather={weather} />

            <Forecast title="پیش‌بینی ساعتی" items={weather.hourly} />
            <Forecast title="پیش‌بینی روزانه" items={weather.daily} />
          </div>
        )}

        <ToastContainer autoClose={1500} theme="light" newestOnTop={true} />
      </div>
    </div>
  );
}

export default App;
