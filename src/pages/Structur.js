import React from "react";

import list1 from "../img/structur/20ИНФ-о-51.pdf";
import list2 from "../img/structur/20ФИ-о-51.pdf";
const pdf1 = list1;
const pdf2 = list2;

export function Structur() {
  return (
    <div className="main-page main-container structur">
      {/* <a href="https://gukolomna.ru/studentu/schedule/">Расписание</a> */}
      <iframe
        src="{pdf1}"
        height="600px"
        width="500px"
        frameborder="0"
        scrolling="yes"
      ></iframe>

      <iframe
        src="{pdf2}"
        height="600px"
        width="500px"
        frameborder="0"
        scrolling="yes"
      ></iframe>
    </div>
  );
}
