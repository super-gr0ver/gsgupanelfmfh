import React from "react";

import list1 from "../img/structur/1.jpg";
import list2 from "../img/structur/2.pdf";
const pdf1 = list1;
const pdf2 = list2;

export function Structur() {
  return (
    <div className="main-page main-container structur">
      {/* <a href="https://gukolomna.ru/studentu/schedule/">Расписание</a> */}
      <img src={pdf1} width="500" height="500" alt="vk-qr-code" />
      <img src={pdf2} alt="vk-qr-code" />

      <embed type="application/pdf" src={pdf2} width="500" height="700" />
      <embed type="x-pdf" src={pdf2} width="500" height="700" />
    </div>
  );
}
