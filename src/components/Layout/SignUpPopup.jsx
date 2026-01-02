export default function SignUpPopup({ toggleSignUp }) {
  return (
    <div
      className="fixed top-1/2 left-1/2
         -translate-x-1/2 -translate-y-1/2
         w-2xs p-3 bg-red-300
         flex flex-col"
    >
      <h1>회원가입</h1>
      <form className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input className="border-1" type="text" />
        <label htmlFor="password">Password</label>
        <input type="password" />
      </form>

      <button>회원가입하기</button>
      <button onClick={toggleSignUp}>닫기</button>
    </div>
  );
}
