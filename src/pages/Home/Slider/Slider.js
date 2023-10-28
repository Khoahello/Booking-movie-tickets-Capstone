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
      setBanner(response.data.content);
    } catch {
      message.error("Đã có lỗi xảy ra");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const onChange = (currentSlide) => {};
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
      <Carousel autoplay effect="fade" afterChange={onChange} className="h-1/2">
        {banner.map((item, index) => {
          return (
            <img
              src={item.hinhAnh}
              index={index}
              className="w-full object-cover"
              alt=""
            />
          );
        })}
      </Carousel>
    </ConfigProvider>
  );
}
