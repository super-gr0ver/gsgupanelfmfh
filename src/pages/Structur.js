import React from "react";
// import fs from "fs";

import list1 from "../img/structur/20ИНФ-о-51.pdf";
import list2 from "../img/structur/20ФИ-о-51.pdf";
import list3 from "../img/structur/20ХИ-о-51.pdf";
import list4 from "../img/structur/22ИНФ-о-31.pdf";

const doc1 = list1;
const doc2 = list2;
const doc3 = list3;
const doc4 = list4;

export function Structur() {
  return (
    <div className="main-page main-container structur">
      {/* <a href="https://gukolomna.ru/studentu/schedule/">Расписание</a> */}
      {/* <embed type="application/pdf" src={pdf2} width="500" height="900" /> */}

      <div>
        <h3>Группа 20ИНФ-о-51</h3>
        <embed type="application/pdf" src={`${doc1}`} />
      </div>

      <div>
        <h3>Группа 20ФИ-о-51</h3>
        <embed type="application/pdf" src={`${doc2}`} />
      </div>

      <div>
        <h3>Группа 20ХИ-о-51</h3>
        <embed type="application/pdf" src={`${doc3}`} />
      </div>

      <div>
        <h3>Группа 22ИНФ-о-31</h3>
        <embed type="application/pdf" src={`${doc4}`} />
      </div>
    </div>
  );
}
