import { app } from "../../api/firebase";
import HomeBanner from "./HomeBanner"

export default function Home() {
  console.log("Firebase app:", app);
  return (
    <div>

      {/* 🔷 배너 영역 */}
      <HomeBanner/>

      {/* 🔹 인사 / 날씨 */}
      <header className="w-full m-5">
        <p className="text-lg">
          안녕하세요, 오늘은 x월 x일입니다.
        </p>
        <p className="text-lg">
          현재 계신 xx구의 날씨는 xx / xx℃로 좋은 날씨입니다.
        </p>
      </header>

      {/* 🔹 인기 글 */}
      <section className="m-5">
        <h1 className="text-xl font-bold text-center mb-4">
          오늘의 인기 글
        </h1>

        <div className="flex justify-around text-lg">
          <ul className="mr-5 space-y-2">
            <li>연금 신청 이렇게 바뀌었다네요.</li>
            <li>건강 기본 상식 5가지</li>
            <li>다들 취미 생활이 어떻게 되시나요.</li>
          </ul>

          <ul className="space-y-2">
            <li>연금 신청 이렇게 바뀌었다네요.</li>
            <li>건강 기본 상식 5가지</li>
            <li>다들 취미 생활이 어떻게 되시나요.</li>
          </ul>
        </div>
      </section>

      {/* 🔹 안내 문구 */}
      <section className="m-5">
        <p className="text-lg text-center text-gray-700">
          오늘도 좋은 인터넷 환경을 위해<br />
          서로를 존중하는 언행을 부탁드립니다.
        </p>
      </section>

    </div>
  );
}
