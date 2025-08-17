import React from "react";

export default function ProjectCard({ image, title, description, onClick,imageWebp,imageWebp2x }) {
  return (
    <div className="bg-[#5b6d4e] rounded-xl shadow-lg w-full max-w-[450px] h-[400px] mt-10 mb-4 flex flex-col overflow-hidden">
      {/* 이미지 영역 */}
      <div className="h-60 flex-shrink-0">
      <picture>
          {imageWebp && imageWebp2x && (
            <source
              srcSet={`${imageWebp} 1x, ${imageWebp2x} 2x`}
              type="image/webp"
            />
          )}
          <img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover"
            style={{
              background: "url('/blur-placeholder.png') center/cover", // Blur Placeholder
            }}
          />
        </picture>
      </div>

      {/* 텍스트 및 버튼 */}
      <div className="flex flex-col justify-between flex-grow p-4 hover:bg-[#68835E]
       transition-all duration-300 cursor-pointer">
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