import React, { useState } from "react";
import { useSelector } from "react-redux";
import { userLocalStorage } from "../../api/localService";
import { NavLink } from "react-router-dom";
import { Button, Drawer, Dropdown, Space } from "antd";
import { DownOutlined, MenuOutlined, UserOutlined } from "@ant-design/icons";

const items = [
  {
    label: <NavLink to={"/profile"}>Thông tin cá nhân</NavLink>,
    key: "0",
  },
  {
    label: <NavLink to={"/history"}>Lịch sử đặt vé</NavLink>,
    key: "1",
  },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // anfn
  let { info } = useSelector((state) => state.userSlice);
  let handleLogOut = () => {
    userLocalStorage.remove();
    // reload trang
    window.location.reload();
    // chuyển hướng về trang home
    // window.location.href = "/"
  };
  let handleLogIn = () => {
    window.location.href = "/login";
  };
  let handleSignUp = () => {
    window.location.href = "/register";
  };

  let renderUserNav = () => {
    let classBtn = "border-2 border-black rounded-xl px-7 py-3";
    if (info) {
      // đã đăng nhập
      return (
        <>
          <div
            className="flex items-center text-gray-500 hover:text-orange-500 cursor-pointer"
            onClick={handleLogOut}
          >
            <i class="las la-sign-out-alt text-2xl px-1"></i>
            <div className="text-base">Đăng xuất</div>
          </div>
          {/* <button className={classBtn} onClick={handleLogOut}>
            Đăng xuất
          </button> */}
        </>
      );
    } else {
      return (
        <>
          <div className="flex flex-col space-y-1">
            <div
              className="flex items-center text-gray-500 hover:text-orange-500 cursor-pointer"
              onClick={handleLogIn}
            >
              <i class="las la-user-circle text-2xl px-1"></i>
              <div lassName="text-base">Đăng nhập</div>
            </div>
            <div
              className="flex items-center text-gray-500 hover:text-orange-500 cursor-pointer"
              onClick={handleSignUp}
            >
              <i class="las la-user-circle text-2xl px-1"></i>
              <div lassName="text-base">Đăng ký</div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div>
      <div className=" h-11 flex items-center justify-between shadow-lg px-5 text-red-600">
        <NavLink className="animate-pulse text-xl font-semibold" to="/home">
          <span>CypberFlix</span>
        </NavLink>
        <div className="flex">
          <MenuOutlined onClick={showDrawer} />
        </div>
      </div>
      <Drawer
        title={renderUserNav()}
        placement="left"
        closable={false}
        onClose={onClose}
        open={open}
        key="left"
        width={"200"}
      >
        <div className="flex flex-col space-y-2">
          <NavLink className="hover:text-orange-500" to={"/profile"}>
            Thông tin cá nhân
          </NavLink>
          <NavLink className="hover:text-orange-500" to={"/history"}>
            Lịch sử đặt vé
          </NavLink>
        </div>
      </Drawer>
    </div>
  );
}
