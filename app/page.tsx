"use client";
import axios from "axios";
import React, { useState } from "react";

import Search from "./components/Search";
import Present from "./components/Present";
import WeatherDetails from "./components/WeatherDetails";
import WeekForecast from "./components/WeekForecast";

interface DayForecast {
  date: string;
  temperature: {
    min: number;
    max: number;
  };
  condition: {
    text: string;
    icon: string;
  };
}

interface WeatherData {
  current?: CurrentData;
  location?: {
    name: string;
    region: string;
  };
  forecast?: {
    forecastday: DayForecast[];
  };
}

export interface CurrentData {
  temp_c?: number;
}

interface WeatherData {
  current?: CurrentData;
}

export default function Home() {
  const [data, setData] = useState<any>({});
  const [location, setLocation] = useState<string>("");
  const [error, setError] = useState<string>("");

  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=95a1d34391c14a8788645846232011&q=${location}&days=7&aqi=yes&alerts=yes`;

  const handleSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        const response = await axios.get(apiUrl);
        const responseData: WeatherData = response.data;
        console.log("data data data data", responseData);
        setData(responseData);
        setLocation("");
        setError("");
      } catch (error: any) {
        setError(error.message);
        console.log(error.message);
        setData({});
      }
    }
  };

  let content;
  if (Object.keys(data).length === 0 && error === "") {
    content = (
      <div className="text-white text-center h-screen mt-20">
        <h2 className="text-3xl font-bold mb-4">
          Welcome to Weather Foreacast
        </h2>
        <p className="text-xl">Enter city name to get weather forecast</p>
      </div>
    );
  } else if (error !== "") {
    content = (
      <div className="text-white text-center h-screen mt-20">
        <p className="text-3xl font-bold mb-4 text-red-500">City not Found</p>
        <p className="text-xl">Enter valid City</p>
      </div>
    );
  } else {
    content = (
      <>
        <div className="flex flex-col md:flex-row px-12 items-center justify-between">
          {data.current && <Present data={data} />}
          {data.current && <WeekForecast data={data} />}
        </div>
        <div>{data.current && <WeatherDetails data={data} />}</div>
      </>
    );
  }

  return (
    <>
      <div className="h-fit bg-cover bg-gradient-to-r from-blue-500 to-blue-300">
        <div className="h-fit bg-white/25 w-full rounded-lg flex flex-col">
          <div className="flex md:flex-row flex-col justify-between items-center px-12 py-7">
            <Search handleSearch={handleSearch} setLocation={setLocation} />
            <h1 className="mb-8 md:mb-0 order-1 text-white py-2 px-4 rounded-xl font-bold italic">
              Weather App.
            </h1>
          </div>
          {content}
        </div>
      </div>
    </>
  );
}
