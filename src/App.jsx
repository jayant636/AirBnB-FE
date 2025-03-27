import { SignInPage, SignUpPage } from './app/Auth/AuthPage';
import Home from './app/home';
import Hotel_Details from './app/hotel-details/Hotel_Details';
import SearchPage from './app/search/SearchPage';
import Footer from './components/layouts/Footer';
import Header from './components/layouts/Header';

function App() {
  return (
    <>
      <Header />
      {/* <Home /> */}
      {/* <Hotel_Details /> */}
      {/* <SignUpPage /> */}
      {/* <SignInPage /> */}
      <SearchPage />
      <Footer />
    </>
  );
}

export default App;
