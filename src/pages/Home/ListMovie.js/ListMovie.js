import React, { useEffect, useState } from "react";
import { getListMovie } from "../../../api/api";
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import { NavLink } from "react-router-dom";

export default function ListMovie() {
  const [movieArr, setMovieArr] = useState([]);
  useEffect(() => {
    getListMovie()
      .then((res) => {
        console.log(res);
        setMovieArr(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container gap-10">
      {movieArr.splice(0, 12).map((item, index) => {
        return (
          <Card
            hoverable
            // style={{ width: 240 }}
            cover={
              <img
                className="h-48 object-cover"
                alt="example"
                src={item.hinhAnh}
              />
            }
          >
            <Meta className="text-lg" title={item.tenPhim} />
            <p className=" py-1 text-gray-500 truncate">{item.moTa}</p>
            <NavLink to={`/detail/${item.maPhim}`} className="text-white">
              <button className="px-20 py-5 text-white bg-red-500 rounded hover:bg-red-700 font-medium">
                Mua vé
              </button>
            </NavLink>
          </Card>
        );
      })}
    </div>
  );
}
