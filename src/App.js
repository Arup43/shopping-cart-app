import './App.css';
import ShoppingCart from './components/ShoppingCart';
import { Provider } from 'react-redux';
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  );
}

export default App;
