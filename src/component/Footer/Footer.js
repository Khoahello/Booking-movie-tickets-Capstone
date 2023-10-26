import React from "react";

export default function Footer() {
  return (
    <div className="bg-gray-800 w-full pt-5 text-white text-xs">
      <div className="container">
        <div className="flex flex-row justify-around">
          <div>
            <p className="mb-3">Tix</p>
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
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
    </div>
  );
}
