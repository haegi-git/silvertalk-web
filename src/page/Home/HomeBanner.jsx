import { useEffect, useState,useRef } from "react";

export default function HomeBanner(){
  // 🔹 배너 데이터 (이미지 + 문구)
  const slidesData = [
    {
      image: "/banner/banner_1.png",
      title: "어르신을 위한 편안한 커뮤니티",
      description: "자유롭게 이야기 나누고, 정보를 공유해보세요",
    },
    {
      image: "/banner/banner_2.png",
      title: "가까운 이웃과 함께하는 공간",
      description: "지역 벙개와 소모임으로 즐거운 시간을 보내세요",
    },
    {
      image: "/banner/banner_3.png",
      title: "서로를 존중하는 따뜻한 공간",
      description: "매너 있는 대화로 모두가 편안한 커뮤니티를 만들어요",
    },
  ];

  // 🔁 무한 슬라이드를 위한 앞/뒤 복제
  const slides = [
    slidesData[slidesData.length - 1],
    ...slidesData,
    slidesData[0],
  ];

  const [current, setCurrent] = useState(1); // 가운데부터 시작
  const [transition, setTransition] = useState(true);
  const [paused, setPaused] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrent((prev) => prev - 1);
  };

  // 🔁 자동 슬라이드 (8초)
  useEffect(() => {
    if (paused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 8000);

    return () => clearInterval(timer);
  }, [paused]);

  // 🔄 무한 루프 처리
  useEffect(() => {
    if (current === slides.length - 1) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(1);
      }, 500);
    } else if (current === 0) {
      setTimeout(() => {
        setTransition(false);
        setCurrent(slides.length - 2);
      }, 500);
    } else {
      setTransition(true);
    }
  }, [current, slides.length]);

  return (
    <section
      className="relative w-full h-[250px] overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* 🔹 슬라이드 트랙 */}
      <div
        className="flex h-full"
        style={{
          transform: `translateX(-${current * 100}%)`,
          transition: transition ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt="배너 이미지"
            className="w-full h-full object-cover flex-shrink-0"
          />
        ))}
      </div>

      {/* 🔹 어두운 오버레이 */}
      <div className="absolute inset-0 bg-black/30 pointer-events-none" />

      {/* 🔹 배너 문구 */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-center px-4 pointer-events-none">
        <h1 className="text-2xl md:text-3xl font-bold mb-2">
          {slides[current].title}
        </h1>
        <p className="text-lg md:text-xl">
          {slides[current].description}
        </p>
      </div>

      {/* ◀ 이전 버튼 */}
      <button
        onClick={prevSlide}
        className="
          absolute left-4 top-1/2 -translate-y-1/2
          bg-black/50 text-white
          w-12 h-12 rounded-full
          text-2xl
          hover:bg-black/70
        "
        aria-label="이전 배너"
      >
        ‹
      </button>

      {/* ▶ 다음 버튼 */}
      <button
        onClick={nextSlide}
        className="
          absolute right-4 top-1/2 -translate-y-1/2
          bg-black/50 text-white
          w-12 h-12 rounded-full
          text-2xl
          hover:bg-black/70
        "
        aria-label="다음 배너"
      >
        ›
      </button>
    </section>
  );
}