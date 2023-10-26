import React from "react";
import ListMovie from "./ListMovie.js/ListMovie";
import TabMovie from "./TabMovie/TabMovie";
import Slider from "./Slider/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <ListMovie></ListMovie>
      <TabMovie />
    </div>
  );
}
