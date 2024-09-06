import React from "react";

import list1 from "../img/structur/20ИНФ-о-51.pdf";
import list2 from "../img/structur/20ФИ-о-51.pdf";
const pdf1 = list1;
const pdf2 = list2;

export function Structur() {
  return (
    <div className="main-page main-container structur">
      {/* <a href="https://gukolomna.ru/studentu/schedule/">Расписание</a> */}
      <embed type="application/pdf" src={pdf1} width="500" height="900" />
      <embed type="application/pdf" src={pdf2} width="500" height="900" />
    </div>
  );
}
