import React from "react";
import "./StyleSignup.scss";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import { BASE_URL, configHeaders } from "../../api/config";
import { useDispatch } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { userLocalStorage } from "../../api/localService";
import { setInfo } from "../../redux/userSlice/userSlice";
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const FormSignup = () => {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  const onFinish = (values) => {
    console.log("Success:", values);
    axios
      .post(`${BASE_URL}/QuanLyNguoiDung/DangKy`, values, {
        headers: configHeaders(),
      })
      .then((res) => {
        // đẩy res lên redux sau khi login xong
        dispatch(setInfo(res.data.content));
        // đẩy data xuống localStorage
        // let dataJson = JSON.stringify(res.data.content)
        // localStorage.setItem("USER", dataJson)
        userLocalStorage.set(res.data.content);
        // useNavigate
        message.success("Đăng ký thành công");
        // chuyển hướng về trang home
        navigate("/home");
        console.log(res);
      })
      .catch((err) => {
        message.error("Tài khoản đã sử dụng");
        console.log(err);
      });
  };

  return (
    <div className="container p-6 flex justify-center" id="SignupForm">
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
          <h1 className=" text-center mb-7 text-4xl text-orange-500">Signup</h1>

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

          <h1 className=" mb-2 text-lg text-white">Email</h1>
          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: "email",
                message: "Please input your email!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <h1 className=" mb-2 text-lg text-white">Phone number</h1>
          <Form.Item
            name="soDt"
            rules={[
              {
                required: true,
                message: "Please input your phone number!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <h1 className=" mb-2 text-lg text-white">Group code</h1>
          <Form.Item
            name="maNhom"
            rules={[
              {
                required: true,
                message: "Please input your group code!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <h1 className=" mb-2 text-lg text-white">Full name</h1>
          <Form.Item
            name="hoTen"
            rules={[
              {
                required: true,
                message: "Please input your full name!",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              className="bg-orange-500 w-full text-lg mb-3 hover:bg-orange-600 text-black"
              htmlType="submit"
            >
              Signup
            </Button>
          </Form.Item>
        </Form>
        <p className=" m-2 text-lg text-center">
          Already have an account?{" "}
          <NavLink to={"/login"} className=" text-orange-600">
            Login
          </NavLink>
        </p>
      </div>
    </div>
  );
};
export default FormSignup;
