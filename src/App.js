import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Route, HashRouter } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'

import rootReducer from './store/reducers'
import './App.css';
import { Main } from './components/Main';
import Wrapper from './components/Wrapper/Wrapper';


//Сделай функционал прогрузки, когда страница не прогрузилась или какой-то элемент(картинка,форма)

//Исправь все на сафари

// Проблемы при обнволении с слов интернет на в Contacts

//ЧИТ ПРО SUSPENCE В РЕКТ БИБЛИОТЕКЕ

// СДЕЛАЙ ФОТО СЕБЯ 
// ИСПРАВЬ БЭКГРАУНД В WEBSITE

const routes = [
  { path: '/', name: 'Main', Component: Main, className: 'introductory' },
  { path: ["/Portfolio", "/About", "/Contacts"], name: 'Wrapper', Component: Wrapper, className: 'wrapper' },
]

const store = createStore(rootReducer, {})

function App() {

  return (
    <Provider store={store}>
      <HashRouter>
        {routes.map(({ path, name, Component, className }) => (
          <Route key={name} exact path={path}>
            {({ match, location }) => (
              <CSSTransition
                in={match != null}
                timeout={2000}
                classNames={className}
                unmountOnExit
              >
                <Component path={location} />
              </CSSTransition>
            )}
          </Route>
        ))}
      </HashRouter>
    </Provider>
  );
}

export default App;
