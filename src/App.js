import { useRef, useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Route, HashRouter } from "react-router-dom";
import { CSSTransition } from 'react-transition-group'

import rootReducer from './store/reducers'
import './App.css';
import { Main } from './components/Main';
import { Portfolio } from './components/Portfolio/Portfolio';
import { About } from './components/About/About';
import { Contacts } from './components/Contacts/Contacts';
import Wrapper from './components/Wrapper/Wrapper';

// *** РАЗОБРАТЬСЯ В КУБИКЕ БИЗЬЕ И НАПИСАТЬ АЛГОРИТМ ДЛЯ АНИМАЦИИ В БЛОКЕ SKILLS 
// *** СДЕЛАЙ АНИМАЦИЮ МАШТИБИРОВАНИЯ ЧЕРЕЗ SCALE КАК NTFLIX С ВЫЩИТЫВАНИЕМ И АНИМАЦИЕЙ ТОЛЬКО КАРТИНКИ
// *** */ РАБОТАЕЛ НАД СЛУЧАЙНЫМИ АНИАЦИЕЯМИ БЛОКА WEBSITE
// !!! ПОСМОТРИ ДРУГИЕ ПОРТФОЛИО СЯДЬ И НАРИСУЙ ЧТО ТЫ ХОЧЕШЬ.  А ТО ТАК СЛОЖНА

// бЭКГРАУНД В ВИДЕ КОДА НА ПОРТФОЛИО С ПАРАЛАКСОМ
//Сделай функционал прогрузки, когда страница не прогрузилась или какой-то элемент(картинка,форма)
//ПРИДУМАЙ ЧТО-ТО С ЕКСПО СДЕЛАЙ СДЕЛАЙ ССЫЛКУ НА ЭКСПО В ЭТИХ БЛОКАХ

// СДЕЛАЙ ПРОВЕРКУ ПОЛЕЙ 
//СДЕЛАЙ АНИМАЦИЮ ШКАЛЫ ПРОЦЕНТОВ В СКИЛАХ, ПЕРМЕНЫ ЦВЕТА В БОРДЕР И СМЕНУ ЦИФРЫ В О ВРЕМЯ АНИМАЦИИ
//СДЕЛАЙ ВЕБСАЙТЫ НА МОБИЛКЕ КАК В НЕТФЛИКС(ПОЯВЛЕНИЕ С НИЗУ)
//РЕШИ ПРОБЛЕМУ С SCROLL-ATTACHMENT В ВЕБСАЙТЕ
//Исправь все на сафари

// Проблемы при обнволении с слов интернет на в Contacts
//пробемы с переходом между отделами при слоу интренет
//ЧИТ ПРО SUSPENCE В РЕКТ БИБЛИОТЕКЕ


const routes = [
  { path: '/', name: 'Main', Component: Main, className: 'introductory' },
  { path: ["/Portfolio", "/About", "/Contacts"], name: 'Wrapper', Component: Wrapper, className: 'wrapper' },
]

const store = createStore(rootReducer, {})

function App() {
  const box = useRef(null)

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
