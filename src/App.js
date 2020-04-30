import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import Header from './containers/Header/Header';
import Footer from './components/Footer/Footer';
import Items from './containers/Items/Items';
import Customizer from './containers/Customizer/Customizer';
import { getItems } from './store/actions/actionCreators';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, [dispatch]);

  return (
    <div className="App">
      <Customizer />
      <div className="site">
        <Header />
        <Items />
        <Footer />
      </div>
    </div>
  );
}

export default App;
