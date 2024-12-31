import './App.css';
import Header from './components/common/Header';
import Fotter from './components/common/Fotter';
import MarketPlace from './components/screens/marketPlace/MarketPlace';

function App() {
  return (
    <div className="App">
      <Header />
      <MarketPlace />
      <Fotter />
    </div>
  );
}

export default App;
