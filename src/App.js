import Header from './components/Header/Header';
import FeatureShoe from './components/FeatureShoe/FeatureShoe';
import Testimonial from './components/Testimonial/Testimonial';

import './index.scss';
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

      <section className="member">
        <div className="member__main">
          <div className="member__content">
            <div className="member__header">immediately join our other members</div>
            <div className="member__subheader">
              Become a Well Shoes member for exclusive discounts, early access to new styles, and
              personalized recommendations. Sign up today to step up your shoe game!
            </div>
            <button className="member__btn">GET A MEMBER</button>
          </div>
        </div>
      </section>

      <section className="frequenty">
        <div className="frequenty__main">
          <div className="frequenty_unreal"></div>
          <div className="frequenty_questions">
            <div>Frequently Asked Questions</div>
          </div>
          <div className="frequenty_unreal"></div>
        </div>
        <div className="frequenty_search-content">
          <div className="frequenty-content">
            <input type="text" placeholder="SEARCH FAQ"></input>
            <div>
              <button>
                WHAT TYPES OF SHOES DO YOU OFFER?
                <img src="img/right-arrow.png"></img>
              </button>
            </div>
            <div>
              <button>WHAT TYPES OF SHOES DO YOU OFFER?</button>
            </div>
            <div>
              <button>WHAT TYPES OF SHOES DO YOU OFFER?</button>
            </div>
            <div>
              <button>WHAT TYPES OF SHOES DO YOU OFFER?</button>
            </div>
            <div>
              <button>WHAT TYPES OF SHOES DO YOU OFFER?</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__content-one">
          <div className="footer__logo">
            <div className="logo__name">WELLSHOES</div>
            <div className="logo__descr">
              Well Shoes offers top-quality footwear with a focus on comfort and style. From casual
              sneakers to formal shoes, our diverse collection meets high standards of design and
              durability. Discover the perfect pair with Well Shoes.
            </div>
          </div>
          <div className="footer__info">
            <div className="footer__contacts">
              <ul>
                <li>081236216362</li>
                <li>contact@wellshoes.gom</li>
              </ul>
            </div>
            <div className="footer__addr">
              <p>Well Shoes Headquarters 1234 Shoe Street, Fashion City, CA 56789, USA</p>
            </div>
            <div className="footer__rules">
              <ul>
                <li>Terms</li>
                <li>Privacy</li>
                <li>Cookies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer__nav">
          <ul>
            <li>AboutUs</li>
            <li>AboutUs</li>
            <li>AboutUs</li>
            <li>AboutUs</li>
            <li>AboutUs</li>
            <li>AboutUs</li>
          </ul>
        </div>

        <div className="footer__get-info">
          <div className="footer__info-main">
            <div className="info__header">
              Get information and updates on wellshoes by entering your email.
            </div>
            <div className="info__inp">
              <input type="text" placeholder="ENTER YOUR EMAIL"></input>
              <a href="#">
                <img src="img/send.png" alt="send"></img>
              </a>
            </div>
          </div>
        </div>
      </footer>
      
      <footer>
        <div className="footer__rights">
        © Shoes E-Commerce. All rights reserved
        </div>
      </footer>
    </>
  );
}

export default App;
