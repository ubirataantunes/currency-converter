import logo from './logo.svg';
import './App.css';
import Converter from './components/Converter';

function App() {
  return (
    <div className="App">
      <h1>Currency converter</h1>
      <div class="line">
        <Converter currencyA="BRL" currencyB="USD"></Converter>
        <Converter currencyA="USD" currencyB="BRL"></Converter>
      </div>
      <div class="line">
        <Converter currencyA="BRL" currencyB="EUR"></Converter>
        <Converter currencyA="EUR" currencyB="BRL"></Converter>
      </div>
      <div class="line">
        <Converter currencyA="BRL" currencyB="CAD"></Converter>
        <Converter currencyA="CAD" currencyB="BRL"></Converter>
      </div>
    </div>
  );
}

export default App;
