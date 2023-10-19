import React, { useState } from "react";
import { Carousel, ConfigProvider, message } from "antd";
import { useEffect } from "react";
import { getDataSlider } from "../../../api/api";
const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function Slider() {
  const [banner, setBanner] = useState([]);
  let fetchData = async () => {
    try {
      let response = await getDataSlider();
      console.log(
        "🤣 ~ file: Slider.js:20 ~ fetchData ~ response:",
        response.data.content
      );
      setBanner(response.data.content);
    } catch {
      message.error("Đã có lỗi xảy ra");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  // try catch
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <ConfigProvider
      theme={{
        components: {
          Carousel: {
            dotHeight: 5,
            dotWidth: 30,
            dotActiveWidth: 70,
          },
        },
      }}
    >
      <Carousel autoplay effect="fade" afterChange={onChange}>
        {banner.map((item, index) => {
          return (
            <img
              src={item.hinhAnh}
              index={index}
              className="h-auto sm:h-64 lg:h-96 xl:h-200 w-full object-cover"
              alt=""
            />
          );
        })}
      </Carousel>
    </ConfigProvider>
  );
}
