import React, { useState } from "react";
import logo from "../assets/logo.png"; // 파일 경로 확인!

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <header className="bg-yellow-300 shadow-md py-4">
      <div className="container mx-auto flex items-center justify-between px-6">
        
        {/* 로고 */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="핫도그 로고" className="w-10 h-10" />
          <span className="text-xl font-bold text-gray-900">핫도그</span>
        </div>

        {/* 로그인 & 회원가입 버튼 */}
        <div className="flex space-x-3">
          <button className="bg-red-500 text-white px-4 py-2 rounded-full font-semibold shadow-md hover:bg-red-600 transition">
            로그인
          </button>
          <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded-full font-semibold shadow-md hover:bg-gray-300 transition">
            회원가입
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;
