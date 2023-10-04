import React from "react";
import { Button, Checkbox, Form, Input, message } from "antd";
import axios from "axios";
import { BASE_URL, configHeaders } from "../../api/config";
import { useDispatch } from "react-redux";
import { SET_INFO } from "../../redux/constant/user";
import { useNavigate } from "react-router-dom";
import { userLocalStorage } from "../../api/localService";
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
        // đẩy res lên redux sau khi login xong
        let action = {
          type: SET_INFO,
          payload: res.data.content,
        };
        console.log();
        dispatch(action);
        // đẩy data xuống localStorage
        // let dataJson = JSON.stringify(res.data.content)
        // localStorage.setItem("USER", dataJson)
        userLocalStorage.set(res.data.content);
        // useNavigate
        message.success("Đăng nhập thành công");
        // chuyển hướng về trang home
        navigate("/home");
        console.log(res);
      })
      .catch((err) => {
        message.error("Tài khoản hoặc mật khẩu không chính xác");
        console.log(err);
      });
  };

  return (
    <Form
      className="w-1/2"
      layout="vertical"
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 20,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
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

      <Form.Item
        label="Password"
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

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 20,
        }}
      >
        <Button type="primary" className="bg-orange-600" htmlType="submit">
          Login
        </Button>
      </Form.Item>
    </Form>
  );
};
export default FormLogin;
