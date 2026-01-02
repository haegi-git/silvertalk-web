import { Outlet } from 'react-router';
import RightSide from './components/Layout/RightSide';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import { useState } from 'react';
import SignUpPopup from './components/Layout/SignUpPopup';

export default function RootLayout() {
  const [signUp, setSignUp] = useState(false);

  const toggleSignUp = () => {
    setSignUp(!signUp);
  };
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 grid grid-cols-[1fr_280px]">
        <Outlet />
        <RightSide toggleSignUp={toggleSignUp} />
      </main>

      {signUp ? <SignUpPopup toggleSignUp={toggleSignUp} /> : null}

      <Footer />
    </div>
  );
}
