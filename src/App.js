import './App.css';

import ScrollToTop from './components/ScrollToTop';

import PreHeader from './components/PreHeader/PreHeader';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Trucks from './pages/Trucks/Trucks';
import Equipment from './pages/Equipment/Equipment';
import Tools from './pages/ToolsPropane/ToolsPropane';
import Concrete from './pages/Concrete/Concrete';
import Resources from './pages/Resources/Resources';
import FAQ from './pages/FAQ/FAQ';
import Contact from './pages/Contact/Contact';
import TruckIndividual from './pages/TruckIndividual/TruckIndividual';
import EquipmentIndividual from './pages/EquipmentIndividual/EquipmentIndividual';


import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <PreHeader />
        <Header />

        <Route exact path = '/' component = {Home} />
        <Route path = '/trucks' component = {Trucks} />
        <Route path = '/equipments' component = {Equipment} />
        <Route path = '/tools' component = {Tools} />
        <Route path = '/concrete' component = {Concrete} />
        <Route path = '/resources' component = {Resources} />
        <Route path = '/faq' component = {FAQ} />
        <Route path = '/contact' component = {Contact} />

        <Route path = '/truck/' component = {TruckIndividual} />
        <Route path = '/equipment/' component = {EquipmentIndividual} />
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
