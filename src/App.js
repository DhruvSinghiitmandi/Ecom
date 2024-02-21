import './App.css';
import './components/Header/Header'
import './components/Products/product'
import Prodcont from './components/Products/product';
import Header from './components/Header/Header';
function App() {
  return (
    <div className='App'>
      <Header></Header>
      <Prodcont/>
    </div>
  );
}

export default App;
