import React from 'react'
import { Navigation } from './Header/Navigation/Navigation'

// *** РАЗОБРАТЬСЯ В КУБИКЕ БИЗЬЕ И НАПИСАТЬ АЛГОРИТМ ДЛЯ АНИМАЦИИ В БЛОКЕ SKILLS 
// *** СДЕЛАЙ АНИМАЦИЮ МАШТИБИРОВАНИЯ ЧЕРЕЗ SCALE КАК NTFLIX С ВЫЩИТЫВАНИЕМ И АНИМАЦИЕЙ ТОЛЬКО КАРТИНКИ
// *** */ РАБОТАЕЛ НАД СЛУЧАЙНЫМИ АНИАЦИЕЯМИ БЛОКА WEBSITE
// !!! ПОСМОТРИ ДРУГИЕ ПОРТФОЛИО СЯДЬ И НАРИСУЙ ЧТО ТЫ ХОЧЕШЬ.  А ТО ТАК СЛОЖНА

//СДЕЛАЙ ДУРГИЕ СТРАНИЦЫ
// бЭКГРАУНД В ВИДЕ КОДА НА ПОРТФОЛИО С ПАРАЛАКСОМ
// БЛЮР БЭКГРАУНД

//ШРИФТЫ
//сДЕЛАЙ аДАПТИВ
// НАРМАЛЬНЫЕ КАРТИНКИ ДЛЯ ИТЕМОВ



//СДЕЛАЙ ФУУТЕР
// СДЕЛАЙ НАВИГАЙЦИЮ МЕЖДУ БЛОКАМИ

export const Main = (props) => {

  return (
    <div className="introductory">
      <div className="introductory__container">
        <div className="introductory__picture"></div>
        <span className="introductory__name">Anatolii Tytarenko</span>
        <h1 className="introductory__title">Anatolii Tytarenko</h1>
        <Navigation />
      </div>
    </div>
  )
}
