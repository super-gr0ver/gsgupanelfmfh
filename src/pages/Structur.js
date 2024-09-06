import React from "react";

export function Structur() {
  return (
    <div className="main-page main-container structur">
      {/* <a href="https://gukolomna.ru/studentu/schedule/">Расписание</a> */}
      <iframe
        src="../img/structur/20ИНФ-о-51.pdf"
        height="600px"
        width="500px"
        frameborder="0"
        scrolling="yes"
      ></iframe>
      <iframe
        src="../img/structur/20ФИ-о-51.pdf"
        height="600px"
        width="500px"
        frameborder="0"
        scrolling="yes"
      ></iframe>

      <object data="../img/structur/20ФИ-о-51.pdf"></object>
      <object data="../img/structur/20ХИ-о-51.pdf"></object>
    </div>
  );
}
