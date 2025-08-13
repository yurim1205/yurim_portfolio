import React from "react";

export default function ProjectCard({ image, title, description, onClick }) {
  return (
    <div className="bg-[#5b6d4e] rounded-xl shadow-lg w-[350px] h-[400px] mt-10 mb-4 flex flex-col overflow-hidden">
      {/* 이미지 영역 */}
      <div className="h-48 flex-shrink-0">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* 텍스트 및 버튼 */}
      <div className="flex flex-col justify-between flex-grow p-4">
        <div>
          <h3 className="text-lg font-bold mb-2 text-white">{title}</h3>
          <p className="text-sm text-white/80">{description}</p>
        </div>
        <button
          onClick={onClick}
          className="mt-4 text-white border border-white px-4 py-2 rounded-lg hover:bg-white hover:text-[#5b6d4e] transition"
        >
          자세히 보기
        </button>
      </div>
    </div>
  );
}