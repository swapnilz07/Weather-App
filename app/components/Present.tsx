import { IoLocationSharp } from "react-icons/io5";

import { getPresentDate } from "../utils/PresentDate";

interface presentProps {
  data: {
    current: {
      condition: {
        icon: string;
        text: string;
      };
      temp_c: number;
    };
    location: {
      name: string;
      region: string;
    };
  };
}

const Present = ({ data }: presentProps) => {
  const presentDate = getPresentDate();
  const weatherIcon = data.current ? data.current.condition.icon : null;
  return (
    <>
      <div className="flex flex-col mb-8 md:mb-0 items-startgap-2 width-1/2">
        <div className="flex items-center">
          <div>
            <h1 className="text-3xl text-white">Today</h1>
            <p className="text-white whitespace-nowrap">{presentDate}</p>
          </div>
          {weatherIcon && (
            <div>
              <img
                className="w-12 object-cover"
                src={weatherIcon}
                alt={data.current.condition.text}
              />
            </div>
          )}
        </div>
        <div className="flex justify-start">
          <p className="text-5xl text-white">
            {data.current.temp_c}
            <span>°</span>
          </p>
          <span className="text-white text-5xl pl-5">
            {data.current.condition.text}
          </span>
        </div>

        <div className="flex items-center text-black bg-white/90 px-2 py-2 rounded-xl">
          <IoLocationSharp size={30} />
          <span className="pl-4">
            {data.location.name} , {data.location.region}
          </span>
        </div>
      </div>
    </>
  );
};

export default Present;
