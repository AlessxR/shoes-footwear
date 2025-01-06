import Header from './components/Header/Header';
import FeatureShoe from './components/FeatureShoe/FeatureShoe';
import Testimonial from './components/Testimonial/Testimonial';
import Member from './components/Member/Member'
import Footer from './components/Footer/Footer';

import Catalog from './pages/Catalog'

import { Routes, Route } from 'react-router-dom';
import './index.scss';
import Frequenty from './components/Frequenty/Frequenty';
function App() {
  return (
    <>
      <Header />
      <main className="ad">
        <div className="ad-text">
          <h1>
            YOUR <br /> DREAM <br /> SHOES <br />{' '}
          </h1>
          <h2>
            ARE HERE
            <img src="img/paird.svg" alt="pair" />
          </h2>
        </div>
      </main>
      <FeatureShoe />
      <Testimonial />
      <Member />
      <Frequenty />
      <Footer />

      <footer>
        <div className="footer__rights">
        © Shoes E-Commerce. All rights reserved
        </div>
      </footer>

    </>
  );
}

export default App;
