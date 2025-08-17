import React, { useEffect } from "react";

export default function Modal({ children, onClose }) {
  useEffect(() => {
    // 모달 열리면 배경 스크롤 막기
    document.body.style.overflow = "hidden";
    return () => {
      // 모달 닫히면 스크롤 복원
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-[60]"
      onClick={onClose} // 배경 클릭 시 모달 닫기
    >
      <div
        className="bg-white p-6 relative max-w-6xl w-[2400px] h-[800px] mt-8 overflow-y-auto"
        onClick={(e) => e.stopPropagation()} // 내부 클릭 시 닫히지 않도록
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>
        {children}
      </div>
    </div>
  );
}
