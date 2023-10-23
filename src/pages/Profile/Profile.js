import React, { useEffect, useState } from "react";
import { Button, Form, Input, message } from "antd";
import { https } from "../../api/config";
import { userLocalStorage } from "../../api/localService";

export default function Profile() {
  let [thongTinNguoiDung, setThongTinNguoiDung] = useState();
  let [thongTinNguoiDungDaCapNhat, setThongTinNguoiDungDaCapNhat] =
    useState(false);

  useEffect(() => {
    https
      .post("/QuanLyNguoiDung/ThongTinTaiKhoan")
      .then((res) => {
        console.log(res);
        setThongTinNguoiDung(res.data.content);
        setThongTinNguoiDungDaCapNhat(true);
        console.log(thongTinNguoiDung);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const onFinish = (values) => {
    values.maNhom = thongTinNguoiDung.maNhom;
    values.maloaiNguoiDung = thongTinNguoiDung.loaiNguoiDung.maLoaiNguoiDung;
    https
      .put("/QuanLyNguoiDung/CapNhatThongTinNguoiDung", values)
      .then((res) => {
        console.log(res);
        message.success("Cập nhật thành công");
        userLocalStorage.remove();
        window.location.href = "/login";
        message.info("Vui lòng đăng nhập lại");
      })
      .catch((err) => {
        message.success("Đã có lỗi xảy ra");
        console.log(err);
      });
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  if (thongTinNguoiDungDaCapNhat) {
    return (
      <div className="container">
        <h1 className=" text-lg m-2">Thông tin cá nhân</h1>
        <div>
          <Form
            className="flex flex-wrap w-full md:flex-row"
            name="basic"
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
            style={{
              maxWidth: 600,
            }}
            initialValues={{
              taiKhoan: thongTinNguoiDung.taiKhoan,
              matKhau: thongTinNguoiDung.matKhau,
              email: thongTinNguoiDung.email,
              soDt: thongTinNguoiDung.soDT,
              maNhom: thongTinNguoiDung.loaiNguoiDung.maNhom,
              maloaiNguoiDung: thongTinNguoiDung.loaiNguoiDung.maLoaiNguoiDung,
              hoTen: thongTinNguoiDung.hoTen,
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <div className=" w-full md:w-1/2">
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Hãy điền email của bạn!",
                  },
                ]}
                label="Email"
                name="email"
              >
                <Input />
              </Form.Item>

              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Hãy điền họ tên của bạn!",
                  },
                ]}
                label="Họ tên"
                name="hoTen"
              >
                <Input />
              </Form.Item>

              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Hãy điền số điện thoại của bạn!",
                  },
                ]}
                label="Số điện thoại"
                name="soDt"
              >
                <Input />
              </Form.Item>
            </div>

            <div className=" w-full md:w-1/2">
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Hãy điền tài khoản của bạn!",
                  },
                ]}
                label="Tài khoản"
                name="taiKhoan"
              >
                <Input />
              </Form.Item>

              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Hãy điền mật khẩu của bạn!",
                  },
                ]}
                label="Mật khẩu"
                name="matKhau"
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  type="primary"
                  htmlType="submit"
                  className="bg-orange-600"
                >
                  Cập nhật
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>
      </div>
    );
  }
}
