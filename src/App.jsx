import { SignInPage, SignUpPage } from './app/Auth/AuthPage';
import Home from './app/home';
import Hotel_Details from './app/hotel-details/Hotel_Details';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';

function App() {
  return (
    <>
      <Header />
      <Home />
      {/* <Hotel_Details /> */}
      {/* <SignUpPage /> */}
      {/* <SignInPage /> */}
      <Footer />
    </>
  );
}

export default App;
