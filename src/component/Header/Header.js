import React from "react";
import { useSelector } from "react-redux";
import { userLocalStorage } from "../../api/localService";
import { NavLink } from "react-router-dom";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";

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
          <sapn>
            <Dropdown
              menu={{
                items,
              }}
              trigger={["click"]}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space className=" hover:cursor-pointer">
                  {info.hoTen}
                  <DownOutlined />
                </Space>
              </a>
            </Dropdown>
          </sapn>
          <button className={classBtn} onClick={handleLogOut}>
            Đăng xuất
          </button>
        </>
      );
    } else {
      return (
        <>
          <button className={classBtn} onClick={handleLogIn}>
            Đăng nhập
          </button>
          <button className={classBtn} onClick={handleSignUp}>
            Đăng ký
          </button>
        </>
      );
    }
  };

  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="h-20 flex items-center justify-between shadow-lg px-20 text-red-600">
      <NavLink className="animate-pulse text-2xl font-semibold" to="/home">
        <span>CypberFlix</span>
      </NavLink>
      <div className="space-x-5">{renderUserNav()}</div>
    </div>
  );
}
