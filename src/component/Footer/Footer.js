import React from "react";

export default function Footer() {
  const LogoDoiTac = [
    {
      logo: "./image/FooterLogo/cgv.png",
      link: "https://www.cgv.vn/",
    },
    {
      logo: "./image/FooterLogo/bhd.png",
      link: "https://www.bhdstar.vn/",
    },
    {
      logo: "./image/FooterLogo/galaxy.png",
      link: "https://www.galaxycine.vn/",
    },
    {
      logo: "./image/FooterLogo/cinestar.png",
      link: "https://cinestar.com.vn/",
    },
    {
      logo: "./image/FooterLogo/lotte.png",
      link: "https://cinestar.com.vn/",
    },
    {
      logo: "./image/FooterLogo/megags.png",
      link: "https://www.megagscinemas.vn/",
    },
    {
      logo: "./image/FooterLogo/beta.jpg",
      link: "https://www.betacinemas.vn/home.htm",
    },
    {
      logo: "./image/FooterLogo/ddc.png",
      link: "http://ddcinema.vn/",
    },
    {
      logo: "./image/FooterLogo/touch.png",
      link: "https://touchcinema.com/",
    },
    {
      logo: "./image/FooterLogo/cinemax.jpg",
      link: "https://cinemaxvn.com/",
    },
    {
      logo: "./image/FooterLogo/starlight.png",
      link: "https://starlight.vn/",
    },
    {
      logo: "./image/FooterLogo/dcine.png",
      link: "https://www.dcine.vn/",
    },
    {
      logo: "./image/FooterLogo/zalopay.png",
      link: "https://zalopay.vn/",
    },
    {
      logo: "./image/FooterLogo/payoo.png",
      link: "https://www.payoo.vn/",
    },
    {
      logo: "./image/FooterLogo/vietcombank.png",
      link: "https://www.vietcombank.com.vn/",
    },
    {
      logo: "./image/FooterLogo/agribank.png",
      link: "https://www.agribank.com.vn/",
    },
    {
      logo: "./image/FooterLogo/viettinbank.png",
      link: "https://www.indovinabank.com.vn/",
    },
    {
      logo: "./image/FooterLogo/ivb.png",
      link: "https://www.vietinbank.vn/web/home/vn/index.html",
    },
    {
      logo: "./image/FooterLogo/123go.png",
      link: "https://webv3.123go.vn/",
    },
    {
      logo: "../../../public/image/FooterLogo/laban.jpg",
      link: "https://laban.vn/",
    },
  ];
  console.log("LogoDoiTac: ", LogoDoiTac);
  return (
    <div className="bg-gray-800 w-full h-auto py-5 text-white text-xs">
      <div className="container">
        <div className=" hidden xl:block mb-6">
          <div className="flex flex-row justify-around">
            <div>
              <p className="mb-3 font-medium">Tix</p>
              <div className="grid grid-cols-2 gap-2 text-gray-400">
                <div>
                  <p className="hover:text-gray-100">FAQ</p>
                  <p className="hover:text-gray-100">Brand Guidelines</p>
                </div>
                <div>
                  <p className="hover:text-gray-100">Thỏa thuận sử dụng</p>
                  <p className="hover:text-gray-100">Chính sách bảo mật</p>
                </div>
              </div>
            </div>
            <div>
              <p className="mb-3 font-medium">Đối tác</p>
              <div className="grid grid-cols-4 gap-x-10 gap-y-5">
                {LogoDoiTac.map((web) => {
                  return (
                    <a href={web.link}>
                      <img
                        className=" w-6 h-6 rounded-full"
                        src={web.logo}
                        alt=""
                      />
                    </a>
                  );
                })}
              </div>
            </div>
            <div>
              <p className="mb-3 font-medium">MOBILE APP</p>
              <div className="grid grid-cols-2 gap-1">
                <a href="https://apps.apple.com/vn/app/tix-id/id1362497752?l=vi">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="./image/FooterLogo/apple.png"
                    alt=""
                  />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.cgv.cinema.vn">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="./image/FooterLogo/android.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
            <div>
              <p className="mb-3 font-medium">SOCIAL</p>
              <div className="grid grid-cols-2 gap-1">
                <a href="https://www.facebook.com/">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="./image/FooterLogo/facebook.png"
                    alt=""
                  />
                </a>
                <a href="https://zaloweb.me/">
                  <img
                    className="w-6 h-6 rounded-full"
                    src="./image/FooterLogo/zalo.png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-white">
          <div className="flex flex-wrap justify-center items-center min-[768px]:justify-around">
            <div className="mt-6 w-1/2 xl:w-1/6 min-[768px]:w-1/4">
              <img
                src="./image/FooterLogo/zion.jpg"
                alt=""
                className="w-1/2 ml-8"
              />
            </div>
            <div className=" text-center xl:w-4/6 min-[768px]:w-2/4">
              <h1 className=" pt-5 pb-2">
                TIX – SẢN PHẨM CỦA CÔNG TY CỔ PHẦN ZION
              </h1>
              <p>
                Địa chỉ: Z06 Đường số 13, Phường Tân Thuận Đông, Quận 7, Tp. Hồ
                Chí Minh, Việt Nam.
              </p>
              <p>Giấy chứng nhận đăng ký kinh doanh số: 0101659783,</p>
              <p>
                đăng ký thay đổi lần thứ 30, ngày 22 tháng 01 năm 2020 do Sở kế
                hoạch và đầu tư Thành phố Hồ Chí Minh cấp.
              </p>
              <p>Số Điện Thoại (Hotline): 1900 545 436</p>
            </div>
            <div className="mt-6 w-1/2 xl:w-1/6 min-[768px]:w-1/4">
              <img
                src="./image/FooterLogo/daThongBao-logo.png"
                alt=""
                className="w-1/2 ml-8"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
