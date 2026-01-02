import { auth } from '../../api/firebase';

export default function LoginForm({ toggleSignUp }) {
  return (
    <div className="flex flex-col border-b">
      <p className="text-xs text-center mb-2">
        안녕하세요.
        <br /> 매너 있는 환경에 동참해주세요.
      </p>
      <input className="border" />
      <input className="border" />
      <button>로그인</button>
      <button>카카오 회원가입</button>
      <button onClick={toggleSignUp}>회원가입</button>
    </div>
  );
}
