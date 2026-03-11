import React from "react";

function IntroText() {
    return (
        <h1 className="text-center text-3xl font-semibold foldable:text-3xl tablet:text-end tablet:text-4xl [&>p]:leading-snug">
            <p className="text-text">
                <span className="inline-block font-bold">
                    데이터 흐름과 사용자 경험을 고려해
                </span>
                <span className="inline-block">
                    <span className="font-bold">&nbsp;React 기반 웹서비스를 구현하는</span>
                </span>
            </p>
            <p>
                <span className="inline-block">프론트엔드 개발자</span>&nbsp;
                <span className="inline-block">
                    <strong className="font-bold">이유림</strong>
                    입니다.
                </span>
            </p>
        </h1>
    );
}

export default IntroText;