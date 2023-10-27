import React, { useEffect, useState } from "react";
import { getMovieByTheater } from "../../../api/api";
import { Tabs } from "antd";
import moment from "moment/moment";
import { hover } from "@testing-library/user-event/dist/hover";
import { NavLink } from "react-router-dom";

const onChange = (key) => {
  console.log(key);
};

export default function TabMovie() {
  const [danhSachHeThongRap, setDanhSachHeThongRap] = useState([]);
  useEffect(() => {
    getMovieByTheater()
      .then((res) => {
        setDanhSachHeThongRap(res.data.content);
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  let renderDsPhim = (dsPhim) => {
    return dsPhim.map((phim) => {
      return (
        <div className="flex space-x-5 p-3">
          <img
            className="w-32 h-48 object-cover"
            src={phim.hinhAnh}
            alt=""
            style={{ border: "1px solid gray" }}
          />
          <div>
            <p className="text-lg font-semibold">{phim.tenPhim}</p>
            <div className="flex flex-wrap">
              {phim.lstLichChieuTheoPhim.map((lichChieu) => {
                // console.log(lichChieu.ngayChieuGioChieu);
                return (
                  <NavLink to={`/ticketroom/${lichChieu.maLichChieu}`}>
                    <button
                      className="bg-red-500 text-white hover:bg-red-600 hover:font-semibold hover:scale-105 rounded px-5 p-2 m-1"
                      // style={{
                      //   transition: "all 0.5s",
                      //   boxShadow: "0 0 3px 1px red",
                      // }}
                    >
                      <div className="flex gap-1">
                        <p>
                          {moment(lichChieu.ngayChieuGioChieu).format(
                            "DD/MM/YYYY"
                          )}
                        </p>
                        <p>
                          {moment(lichChieu.ngayChieuGioChieu).format("HH:mm")}
                        </p>
                      </div>
                    </button>
                  </NavLink>
                );
              })}
            </div>
          </div>
        </div>
      );
    });
  };

  let handleHeThongRap = () => {
    return danhSachHeThongRap.map((heThongRap, index) => {
      return {
        key: index,
        label: <img className="w-16" src={heThongRap.logo} alt="" />,
        children: (
          <Tabs
            style={{
              height: 500,
            }}
            tabPosition="left"
            items={heThongRap.lstCumRap.map((cumRap) => {
              return {
                key: cumRap.tenCumRap,
                label: (
                  <div className="w-96 text-left whitespace-normal">
                    <p className="text-green-800 font-medium">
                      {cumRap.tenCumRap}
                    </p>
                    <p className=" hover:text-green-800">{cumRap.diaChi}</p>
                  </div>
                ),
                children: (
                  <div
                    style={{
                      height: 500,
                      overflow: "scroll",
                    }}
                  >
                    {renderDsPhim(cumRap.danhSachPhim)}
                  </div>
                ),
              };
            })}
          />
        ),
      };
    });
  };
  return (
    <div className="container shadow p-3 rounded border-2 border-l-black hidden lg:block">
      <Tabs
        style={{
          height: 500,
        }}
        tabPosition="left"
        defaultActiveKey="1"
        items={handleHeThongRap()}
        onChange={onChange}
      />
    </div>
  );
}
