import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailMovie } from "../../api/api";
import { Progress, Rate } from "antd";
import moment from "moment";
import TabMovie from "./TabMovie";

export default function DetailMovie() {
  // useParams() => lấy id từ thanh địa chỉ
  let params = useParams();
  const [detail, setDetail] = useState({});
  console.log("🤣 ~ file: DetailMovie.js:6 ~ DetailMovie ~ params:", params);
  useEffect(() => {
    // gọi api lấy chi tiết phim dựa vào id
    getDetailMovie(params.id)
      .then((res) => {
        console.log(res);
        setDetail(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("danhGia", detail.danhGia);
  return (
    <div>
      <div className="bg-black p-5 w-full h-auto">
        <div className="container md:flex items-center py-20">
          <div className="md:w-1/4 p-1 flex justify-center items-center">
            <img className="h-80 rounded" src={detail.hinhAnh} alt="" />
          </div>
          <div className="md:w-1/2 md:text-left text-center p-1 flex flex-col text-white leading-10">
            <p className="text-base font-medium">
              {moment(detail.ngayKhoiChieu).format("DD/MM/YYYY")}
            </p>
            <p className="text-2xl font-medium">{detail.tenPhim}</p>
            <p className="text-sm font-medium">120 phút</p>
          </div>
          <div className="md:w-1/4 p-1 flex flex-col items-center">
            <Progress
              className="py-4"
              size={150}
              strokeColor={"red"}
              strokeWidth={10}
              format={(percent) => (
                <span className="text-red-600 font-medium block">
                  {percent / 10} Điểm
                </span>
              )}
              type="circle"
              percent={detail.danhGia * 10}
            />
            <Rate disabled allowHalf value={(detail.danhGia / 10) * 5} />
          </div>
        </div>
      </div>
      <TabMovie />
    </div>
  );
}

// progress antd
