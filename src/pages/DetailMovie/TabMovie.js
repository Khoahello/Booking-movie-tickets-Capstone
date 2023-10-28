import React, { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { getInfoMovieByTheater } from "../../api/api";
import { Tabs } from "antd";
import moment from "moment";

const onChange = (key) => {
  console.log(key);
};

export default function TabMovie() {
  const params = useParams();
  const [danhSachLichChieuPhim, setDanhSachLichChieuPhim] = useState({});
  const [danhSachLichChieuPhimDaCapNhat, setDanhSachLichChieuPhimDaCapNhat] =
    useState(false);

  useEffect(() => {
    getInfoMovieByTheater(params.id)
      .then((res) => {
        setDanhSachLichChieuPhim(res.data.content);
        setDanhSachLichChieuPhimDaCapNhat(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderLichChieuPhim = (lichChieuPhim) => {
    return lichChieuPhim.map((lichChieuPhim) => {
      return (
        <NavLink to={`/ticketroom/${lichChieuPhim.maLichChieu}`}>
          <button className="bg-red-500 text-white hover:bg-red-600 hover:font-semibold hover:scale-105 rounded px-5 p-2 m-1">
            <div className="flex gap-1">
              <p>
                {moment(lichChieuPhim.ngayChieuGioChieu).format("DD/MM/YYYY")}
              </p>
              <p>{moment(lichChieuPhim.ngayChieuGioChieu).format("HH:mm")}</p>
            </div>
          </button>
        </NavLink>
      );
    });
  };

  let renderCumRapChieu = (cumRapChieu) => {
    return cumRapChieu.map((cumRap) => {
      return (
        <div className=" p-2">
          <div className="flex flex-wrap items-center">
            <img className="w-1/12" src={cumRap.hinhAnh} alt="" />
            <div className="w-11/12 flex flex-col pl-4">
              <h1 className="text-lg font-medium">{cumRap.tenCumRap}</h1>
              <p className="text-sm text-gray-500">{cumRap.diaChi}</p>
            </div>
          </div>
          <div className=" pl-20 pt-4">
            {renderLichChieuPhim(cumRap.lichChieuPhim)}
          </div>
        </div>
      );
    });
  };

  let handleThuNgay = (cumRapChieu) => {
    const getthuNgay = [
      { thu: ["Thứ 2"], ngay: [15] },
      { thu: ["Thứ 3"], ngay: [16] },
      { thu: ["Thứ 4"], ngay: [17] },
      { thu: ["Thứ 5"], ngay: [18] },
      { thu: ["Thứ 6"], ngay: [19] },
      { thu: ["Thứ 7"], ngay: [20] },
      { thu: ["Chủ Nhật"], ngay: [21] },
    ];
    return getthuNgay.map((thuNgay) => {
      return {
        key: thuNgay.ngay,
        label: (
          <div className="items-center justify-center">
            <p className="text-center">{thuNgay.thu}</p>
            <p className="text-center">{thuNgay.ngay}</p>
          </div>
        ),
        children: (
          <div
            style={{
              height: 500,
            }}
          >
            {renderCumRapChieu(cumRapChieu)}
          </div>
        ),
      };
    });
  };

  let handleHeThongRap = () => {
    if (danhSachLichChieuPhimDaCapNhat) {
      return danhSachLichChieuPhim.heThongRapChieu.map((heThongRap, index) => {
        return {
          key: index,
          label: (
            <div className="flex flex-wrap items-center justify-between gap-2">
              <img className="w-16" src={heThongRap.logo} alt="" />
              <p>{heThongRap.tenHeThongRap}</p>
            </div>
          ),
          children: (
            <Tabs
              style={{
                height: 500,
              }}
              items={handleThuNgay(heThongRap.cumRapChieu)}
            />
          ),
        };
      });
    }
  };

  console.log("lịch chiếu phim", danhSachLichChieuPhim);

  if (danhSachLichChieuPhimDaCapNhat) {
    if (danhSachLichChieuPhim.heThongRapChieu.length === 0) {
      return (
        <div className="flex flex-col text-center h-20">
          <h1>
            Hệ thống rạp chiếu của bộ phim này chưa được cập nhật hoặc đã quá
            hạn chiếu
          </h1>
          <h1>Xin lỗi vì sự bất tiện này</h1>
        </div>
      );
    } else {
      return (
        <div className="">
          <div className="container shadow p-3 rounded border-2 border-l-black">
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
        </div>
      );
    }
  }
}
