import React from "react";

import list1 from "../img/structur/1.jpg";
import list2 from "../img/structur/2.jpg";
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
        src="../img/structur/2.jpg"
        height="600px"
        width="500px"
        frameborder="0"
        scrolling="yes"
      ></iframe>
    </div>
  );
}
