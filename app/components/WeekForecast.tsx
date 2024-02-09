interface dayForecast {
  date: string; // Add the date property
  day: {
    condition: {
      icon: string;
      text: string;
    };
    maxtemp_c: string;
    mintemp_c: string;
  };
}

interface forecastProps {
  data: {
    forecast: {
      forecastday: dayForecast[];
    };
  };
}

const WeekForecast = ({ data }: forecastProps) => {
  const forecastDays = data.forecast.forecastday.slice(0, 7);

  // Pad the forecastDays array if it has less than 7 days
  while (forecastDays.length < 7) {
    forecastDays.push({
      date: "",
      day: { condition: { icon: "", text: "" }, maxtemp_c: "", mintemp_c: "" },
    });
  }
  
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 w-full p-12 ">
        {data.forecast.forecastday.map((day, index) => (
          <div
            key={index}
            className="bg-white/40 p-2 text-center rounded-lg flex flex-col items-center"
          >
            <p>
              {new Date(day.date).toLocaleString("en-Us", { weekday: "short" })}
            </p>
            <img src={day.day.condition.icon} alt={day.day.condition.text} />
            <div>
              <p>H {day.day.maxtemp_c}°</p>
              <p>L {day.day.mintemp_c}°</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default WeekForecast;
