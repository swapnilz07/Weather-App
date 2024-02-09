import { WiHumidity } from "react-icons/wi";
import { MdAir } from "react-icons/md";
import { CiTempHigh } from "react-icons/ci";
import { FaEye } from "react-icons/fa6";
import { GiWindSlap } from "react-icons/gi";
import { GiCompass } from "react-icons/gi";
import { BsSunrise } from "react-icons/bs";
import { BsSunset } from "react-icons/bs";

interface weatherDetailsProps {
  data: {
    current: {
      wind_kph: number;
      humidity: number;
      wind_dir: string;
      pressure_mb: number;
      feelslike_c: number;
      vis_km: number;
    };
    forecast: {
      forecastday: {
        astro: {
          sunrise: string;
          sunset: string;
        };
      }[];
    };
  };
}

const WeatherDetails = ({ data }: weatherDetailsProps) => {
  return (
    <>
      <div className="p-12">
        <h1 className="text-2xl text-white mb-4">Weather Details</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="bg-white/50 flex justify-center items-center gap-6 rounded-xl p-4">
            <div className="text-2xl">
              <h3>Wind Speed</h3>
              <h3>{data.current.wind_kph} kph</h3>
            </div>
            <div className="">
              <GiWindSlap fontSize={40} />
            </div>
          </div>

          <div className="bg-white/50 flex justify-center items-center gap-6 rounded-xl p-4">
            <div className="text-2xl">
              <h3>Humidity</h3>
              <h3>{data.current.humidity}%</h3>
            </div>
            <div className="">
              <WiHumidity fontSize={50} />
            </div>
          </div>
          <div className="bg-white/50 flex justify-center items-center gap-6 rounded-xl p-4">
            <div className="text-2xl">
              <h3>Wind Direction</h3>
              <h3>{data.current.wind_dir} kph</h3>
            </div>
            <div className="">
              <GiCompass fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 flex justify-center items-center gap-6 rounded-xl p-4">
            <div className="text-2xl">
              <h3>Sunrise</h3>
              <h3>{data.forecast.forecastday[0].astro.sunrise}</h3>
            </div>
            <div className="">
              <BsSunrise fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 flex justify-center items-center gap-6 rounded-xl p-4">
            <div className="text-2xl">
              <h3>Sunset</h3>
              <h3>{data.forecast.forecastday[0].astro.sunset}</h3>
            </div>
            <div className="">
              <BsSunset fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 flex justify-center items-center gap-6 rounded-xl p-4">
            <div className="text-2xl">
              <h3>Air Pressure</h3>
              <h3>{data.current.pressure_mb} hPa</h3>
            </div>
            <div className="">
              <MdAir fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 flex justify-center items-center gap-6 rounded-xl p-4">
            <div className="text-2xl">
              <h3>Feels Like</h3>
              <h3>{data.current.feelslike_c}°</h3>
            </div>
            <div className="">
              <CiTempHigh fontSize={40} />
            </div>
          </div>
          <div className="bg-white/50 flex justify-center items-center gap-6 rounded-xl p-4">
            <div className="text-2xl">
              <h3>Visibility</h3>
              <h3>{data.current.vis_km} kph</h3>
            </div>
            <div className="">
              <FaEye fontSize={40} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeatherDetails;
