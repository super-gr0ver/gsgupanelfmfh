import React from "react";
import { NavLink } from "react-router-dom";
// import tg from "../img/socials/qr-tg.svg";
import vk from "../img/socials/qr-vk.svg";

function SideMenu() {
  return (
    <div className="main-sidemenu">
      <div className="main-nav">
        <NavLink to="/">Главная</NavLink>
        {/* <NavLink to="info">Расписание</NavLink> */}
        <a href="https://www.gukolomna.ru/studentu/schedule/">Расписание</a>
        <NavLink to="abitur">О факультете</NavLink>
        {/* <NavLink to="structur">Расписание</NavLink> */}
        <NavLink to="eduprocess">Учебный процесс</NavLink>
        {/* <NavLink to="https://gukolomna.ru/sveden/document/">Документы</NavLink> */}
        <a href="https://gukolomna.ru/sveden/document/">Документы</a>

        <NavLink to="projects">Проекты</NavLink>
        <NavLink to="tech">Технологии</NavLink>
        {/* <NavLink to="educuality">Трудоустройство</NavLink> */}
        <a href="https://gukolomna.ru/studentu/trudoustroystvo/">
          Трудоустройство
        </a>
        <NavLink to="contact">Контакты</NavLink>
      </div>
      <div className="socials-container">
        {/* <div className='socials-item'>
           <div className='socials-item-title'>Мы в Telegram</div>
           <img src={tg} width='100' height='100' alt='tg-qr-code' />
         </div> */}
        <div className="socials-item">
          <div className="socials-item-title">Мы ВКонтакте</div>
          <img src={vk} width="100" height="100" alt="vk-qr-code" />
        </div>
      </div>
    </div>
  );
}

export default SideMenu;
