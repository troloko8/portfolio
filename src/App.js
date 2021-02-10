import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Route, HashRouter } from "react-router-dom";

import rootReducer from './store/reducers'
import './App.css';
import { Main } from './components/Main';
import { Portfolio } from './components/Portfolio/Portfolio';
import Header from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';


//СДЕЛАЙ ПШП ДЛЯ ФОРМЫ

const store = createStore(rootReducer, ['Use redux'])

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <Header />
        <Route exact path="/" component={Main} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contacts} />
        <Footer />
      </HashRouter>
    </Provider>
  );
}

export default App;
