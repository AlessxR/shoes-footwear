import './App.scss';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <main className="ad">
        <div className="ad-text">
          <h1>YOUR <br /> DREAM <br /> SHOES <br /> </h1>
          <h2>
            ARE HERE
            <img src="img/paird.svg" alt="pair" />
          </h2>
        </div>
      </main>
    </>
  );
}

export default App;
