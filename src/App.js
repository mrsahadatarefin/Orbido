
import './App.css';
import NavBar from './components/navbar/Navbar';
import Home from './components/home/Home';
import Offers from './components/offers/Offers';
import Billing from './components/billing/Billing';
import CompanyLogo from './components/CompanyLogo/CompanyLogo';
import Service from './components/Service/Service';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <div >
      <NavBar/>
      <Home/>
      <Offers/>
      <Billing/>
      <CompanyLogo/>
      <Service/>
      <Footer/>
      
     
     
    </div>
  );
}

export default App;
