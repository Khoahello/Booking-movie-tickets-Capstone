import axios from "axios";
import { BASE_URL, configHeaders } from "./config";

export let getListMovie = () => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachPhim`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getDetailMovie = (maPhim) => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayThongTinPhim?Maphim=${maPhim}`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getMovieByTheater = () => {
  return axios({
    url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuHeThongRap`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getDataSlider = () => {
  return axios({
    url: `${BASE_URL}/QuanLyPhim/LayDanhSachBanner`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getInfoMovieByTheater = (maPhim) => {
  return axios({
    url: `${BASE_URL}/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`,
    method: "GET",
    headers: configHeaders(),
  });
};

export let getChair = (maLichChieu) => {
  return axios({
    url: `${BASE_URL}/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`,
    method: "GET",
    headers: configHeaders(),
  });
};
