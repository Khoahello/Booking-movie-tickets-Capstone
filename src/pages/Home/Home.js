import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../component/Header/Header";
import ListMovie from "./ListMovie.js/ListMovie";
import TabMovie from "./TabMovie/TabMovie";
import Footer from "../../component/Footer/Footer";
import Slider from "./Slider/Slider";

export default function Home() {
  return (
    <div>
      <Slider />
      <ListMovie></ListMovie>
      <TabMovie />
      <Footer />
    </div>
  );
}
