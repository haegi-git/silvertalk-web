import LoginForm from '../login/LoginForm';

export default function RightSide({ toggleSignUp }) {
  return (
    <aside className="border-l border-gray-300">
      <LoginForm toggleSignUp={toggleSignUp} />

      <ul
        className="flex
             flex-col
             text-center
             mt-3 mb-3
             text-lg
             font-bold"
      >
        <li>공지 사항</li>
        <li>공공 일자리</li>
      </ul>

      <ul
        className="flex
             flex-col
             text-center
             mt-3 mb-3
             text-lg
             font-bold"
      >
        <li>자유 게시판</li>
        <li>유머 게시판</li>
        <li>취미 게시판</li>
        <li>벙개 게시판</li>
        <li>정치 게시판</li>
      </ul>
    </aside>
  );
}
