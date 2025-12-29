import { Outlet } from 'react-router';
import RightSide from './components/RightSide';
import Header from './components/Header'

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1 grid grid-cols-[1fr_280px]">
        <Outlet />
        <RightSide/>
      </main>

      

      <footer>
        <h1>푸터 테스트</h1>
      </footer>
    </div>
  );
}