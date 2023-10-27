import React, { useEffect, useState } from "react";
import "./StyleListChair.scss";
import { useParams } from "react-router-dom";
import { getChair } from "../../api/api";
import moment from "moment";
import { https } from "../../api/config";
import { message } from "antd";
import { userLocalStorage } from "../../api/localService";
import { useSelector } from "react-redux";

export default function TicketRoom() {
  let { info } = useSelector((state) => state.userSlice);

  let params = useParams();
  const [danhSachPhongVe, setDanhSachPhongVe] = useState({});
  const [danhSachPhongVeDaCapNhat, setDanhSachPhongVeDaCapNhat] =
    useState(false);
  const [danhSachGheDangChon, setDanhSachGheDangChon] = useState([]);
  const [danhSachDatVe, setDanhSachDatVe] = useState({
    maLichChieu: params.id,
    danhSachVe: [],
  });
  const [tongTien, setTongTien] = useState(0);

  useEffect(() => {
    getChair(params.id)
      .then((res) => {
        setDanhSachPhongVe(res.data.content);
        setDanhSachPhongVeDaCapNhat(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (danhSachPhongVeDaCapNhat) {
    console.log("danh sách phòng vé", danhSachPhongVe);
  } else {
    console.log("chưa cập nhật");
  }
  console.log(danhSachPhongVe);

  let handleClickChair = (tenGhe, loaiGhe, giaVe, maGhe) => {
    let element = document.getElementsByClassName(`${tenGhe}`);
    for (let i = 0; i < element.length; i++) {
      if (
        element[i].classList.contains("gheThuong") ||
        element[i].classList.contains("gheVip")
      ) {
        if (loaiGhe == "Thuong") {
          element[i].classList.remove("gheThuong");
          element[i].classList.add("gheDangChon");
        } else {
          element[i].classList.remove("gheVip");
          element[i].classList.add("gheDangChon");
        }
        setDanhSachGheDangChon([...danhSachGheDangChon, tenGhe]);
        setTongTien(tongTien + giaVe);
        setDanhSachDatVe({
          maLichChieu: params.id,
          danhSachVe: [
            ...danhSachDatVe.danhSachVe,
            {
              maGhe: maGhe,
              giaVe: giaVe,
            },
          ],
        });
      } else if (element[i].classList.contains("gheDangChon")) {
        if (loaiGhe == "Thuong") {
          element[i].classList.remove("gheDangChon");
          element[i].classList.add("gheThuong");
        } else {
          element[i].classList.remove("gheDangChon");
          element[i].classList.add("gheVip");
        }
        setDanhSachGheDangChon(
          [...danhSachGheDangChon].filter((ghe) => ghe !== tenGhe)
        );
        setTongTien(tongTien - giaVe);
        setDanhSachDatVe({
          maLichChieu: params.id,
          danhSachVe: danhSachDatVe.danhSachVe.filter(
            (ghe) => ghe.maGhe !== maGhe
          ),
        });
      }
    }
    console.log(danhSachDatVe);
  };

  let renderListChair = () => {
    return danhSachPhongVe.danhSachGhe.map((listChair, index) => {
      return (
        <div
          onClick={
            listChair.daDat
              ? null
              : () => {
                  handleClickChair(
                    listChair.tenGhe,
                    listChair.loaiGhe,
                    listChair.giaVe,
                    listChair.maGhe
                  );
                }
          }
          className={`ghe m-1 ${listChair.tenGhe} ${
            listChair.daDat
              ? "gheDuocChon"
              : listChair.loaiGhe == "Thuong"
              ? "gheThuong"
              : "gheVip"
          }`}
          key={index}
        >
          {listChair.daDat ? "X" : listChair.tenGhe}
        </div>
      );
    });
  };

  let renderListGheDangChon = () => {
    return danhSachGheDangChon.map((tenGhe) => {
      return (
        <div class="bg-gray-300 rounded-lg p-1" key={tenGhe}>
          {tenGhe}
        </div>
      );
    });
  };

  let handleDatVe = () => {
    if (info) {
      https
        .post("/QuanLyDatVe/DatVe", danhSachDatVe)
        .then((res) => {
          console.log(res);
          message.success("Đặt vé thành công");
          // window.location.reload();
        })
        .catch((err) => {
          console.log(err);
          message.error("Đã có lỗi xảy ra");
          // window.location.reload();
        });
      console.log(danhSachDatVe);
      console.log(userLocalStorage.get()?.accessToken);
    } else {
      message.error("Vui lòng đăng nhập");
    }
  };

  if (danhSachPhongVeDaCapNhat) {
    return (
      <div className="bg-white" id="TicketRoom">
        <div className="container">
          <div className="lg:flex items-center">
            <div className="lg:w-1/2 py-5">
              {/* <div className="screen"></div> */}
              <div className="grid grid-cols-16 gap-1">{renderListChair()}</div>
              <div className="flex justify-evenly m-3">
                <div className="">
                  <div className="ghe text-gray-500 bg-gray-400 font-semibold border-2 border-gray-400">
                    X
                  </div>
                  <p className="text-center">Đã đặt</p>
                </div>
                <div className="">
                  <div className="ghe bg-gray-200 border-2 border-orange-400"></div>
                  <p className="text-center">Thường</p>
                </div>
                <div className="">
                  <div className="ghe bg-orange-400 border-2 border-orange-400"></div>
                  <p className="text-center">Vip</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2">
              <div class="container mx-auto px-4 py-5">
                <div class="bg-white rounded-lg shadow-xl p-6">
                  <h1 class="text-2xl font-bold mb-4 text-center">
                    {Intl.NumberFormat("vn-VN").format(tongTien)}VNĐ
                  </h1>
                  <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h2 class="text-xl font-semibold mb-2">Cụm rạp</h2>
                      <p class="text-gray-600">
                        {danhSachPhongVe.thongTinPhim.tenCumRap}
                      </p>
                    </div>
                    <div>
                      <h2 class="text-xl font-semibold mb-2">Địa chỉ</h2>
                      <p class="text-gray-600">
                        {danhSachPhongVe.thongTinPhim.diaChi}
                      </p>
                    </div>
                    <div>
                      <h2 class="text-xl font-semibold mb-2">Rạp</h2>
                      <p class="text-gray-600">
                        {danhSachPhongVe.thongTinPhim.tenRap}
                      </p>
                    </div>
                    <div>
                      <h2 class="text-xl font-semibold mb-2">Ngày giờ chiếu</h2>
                      <p class="text-gray-600">
                        {moment(
                          danhSachPhongVe.thongTinPhim.ngayChieu +
                            " " +
                            danhSachPhongVe.thongTinPhim.gioChieu
                        ).format("DD/MM/YYYY - HH:mm")}
                      </p>
                    </div>
                    <div>
                      <h2 class="text-xl font-semibold mb-2">Tên phim</h2>
                      <p class="text-gray-600">
                        {danhSachPhongVe.thongTinPhim.tenPhim}
                      </p>
                    </div>
                  </div>
                  <div class="mt-4">
                    <h2 class="text-xl font-semibold mb-2">Chọn ghế</h2>
                    <div class="grid grid-cols-1 md:grid-cols-10 gap-2 text-center">
                      {renderListGheDangChon()}
                    </div>
                  </div>
                  <div class="mt-4">
                    <button
                      class="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                      onClick={() => {
                        handleDatVe();
                      }}
                    >
                      Đặt vé
                    </button>
                  </div>
                </div>
              </div>

              {/*  */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
