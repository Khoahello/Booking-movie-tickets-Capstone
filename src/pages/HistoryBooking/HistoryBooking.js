import { useEffect, useState } from "react";
import { https } from "../../api/config";
import moment from "moment";

export default function HistoryBooking() {
  let [lichSuDatVe, setLichSuDatVe] = useState();
  let [lichSuDatVeDaCapNhat, setLichSuDatVeDaCapNhat] = useState(false);
  useEffect(() => {
    https
      .post("/QuanLyNguoiDung/ThongTinTaiKhoan")
      .then((res) => {
        console.log(res.data.content.thongTinDatVe);
        setLichSuDatVe(res.data.content.thongTinDatVe);
        setLichSuDatVeDaCapNhat(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  let renderDsLichSuDatVe = () => {
    return lichSuDatVe.map((item) => {
      return item.danhSachGhe.map((ghe) => {
        return (
          <div className=" flex space-x-5 p-3">
            <div className="">
              <img
                className="w-32 h-32 object-cover border-gray-500 rounded-sm"
                src={item.hinhAnh}
                alt=""
              />
            </div>
            <div className="w-2/3">
              <h1 className=" text-lg font-semibold">{item.tenPhim}</h1>
              <h1 className=" text-gray-500 font-medium">
                {ghe.tenHeThongRap}
              </h1>
              <div className="flex flex-wrap w-full md:flex-row gap-1 text-gray-500 text-sm">
                <p>
                  Ngày đặt: {moment(item.ngayDat).format("DD/MM/YYYY HH:mm")}
                </p>{" "}
                -<p>{ghe.tenCumRap}</p> -<p>Ghế: {ghe.tenGhe}</p>
              </div>
            </div>
          </div>
        );
      });
    });
  };
  if (lichSuDatVeDaCapNhat) {
    return (
      <div className="container">
        <h1 className=" text-xl font-semibold m-2">Lịch sử đặt vé</h1>
        <div className=" border-gray-500 border-2 overflow-y-scroll h-screen">
          {renderDsLichSuDatVe()}
        </div>
      </div>
    );
  }
}
