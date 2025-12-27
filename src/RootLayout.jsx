import { Outlet } from 'react-router';

export default function RootLayout() {
  return (
    <div>
      <header>
        <h1>온라인 경로당</h1>
      </header>

      <div>
        <Outlet />
      </div>

      <footer>
        <h1>푸터 테스트</h1>
      </footer>
    </div>
  );
}