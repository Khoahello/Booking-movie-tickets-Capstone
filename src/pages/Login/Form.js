import React from "react";
import "./StyleLogin.scss";
import { Button, Form, Input, message } from "antd";
import axios from "axios";
import { BASE_URL, configHeaders } from "../../api/config";
import { useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { userLocalStorage } from "../../api/localService";
import { setInfo } from "../../redux/userSlice/userSlice";
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const FormLogin = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post(`${BASE_URL}/QuanLyNguoiDung/DangNhap`, values, {
        headers: configHeaders(),
      })
      .then((res) => {
        dispatch(setInfo(res.data.content));
        userLocalStorage.set(res.data.content);
        message.success("Đăng nhập thành công");
        navigate("/home");
        console.log(res);
      })
      .catch((err) => {
        message.error("Tài khoản hoặc mật khẩu không chính xác");
        console.log(err);
      });
  };

  return (
    <div className="container p-6 flex justify-center h-screen" id="LoginForm">
      <div className="form-container">
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h1 className=" text-center mb-7 text-4xl text-orange-500">Login</h1>
          <h1 className=" mb-2 text-lg text-white">Username</h1>

          <Form.Item
            name="taiKhoan"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <h1 className=" mb-2 text-lg text-white">Password</h1>
          <Form.Item
            name="matKhau"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item>
            <Button
              type="secondary"
              className="bg-orange-500 w-full text-lg mb-3 hover:bg-orange-600 text-black"
              htmlType="submit"
            >
              Login
            </Button>
          </Form.Item>
        </Form>
        <p className=" m-2 text-lg text-center">
          Don't have an account?{" "}
          <NavLink
            to={"/register"}
            className=" text-orange-500 hover:text-orange-400"
          >
            Signup
          </NavLink>
        </p>
      </div>
    </div>
  );
};
export default FormLogin;
