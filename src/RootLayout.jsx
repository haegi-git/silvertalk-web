import { Outlet } from 'react-router';
import RightSide from './components/Layout/RightSide';
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer';

export default function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <main className="flex-1 grid grid-cols-[1fr_280px]">
        <Outlet />
        <RightSide/>
      </main>

      

      <Footer/>
    </div>
  );
}