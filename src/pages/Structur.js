import React from "react";
import fs from "fs";

import list1 from "../img/structur/20ИНФ-о-51.pdf";
import list2 from "../img/structur/20ФИ-о-51.pdf";
import list3 from "../img/structur/20ХИ-о-51.pdf";
import list4 from "../img/structur/22ИНФ-о-31.pdf";
import list5 from "../img/structur/22МА-о-31.pdf";
import list6 from "../img/structur/22ФА-о-31.pdf";
import list7 from "../img/structur/22ХИ-о-31.pdf";
import list8 from "../img/structur/23БХ-о-21.pdf";
import list9 from "../img/structur/23ИНФ-о-21.pdf";
import list10 from "../img/structur/23МА-о-21.pdf";
import list11 from "../img/structur/24БХ-о-11.pdf";
import list12 from "../img/structur/24ИНФ-о-11.pdf";
import list13 from "../img/structur/24МИ-о-11.pdf";
import list14 from "../img/structur/24ФА-о-11.pdf";
import list15 from "../img/structur/23ФА-о-21.pdf";

const doc1 = list1;
const doc2 = list2;
const doc3 = list3;
const doc4 = list4;
const doc5 = list5;
const doc6 = list6;
const doc7 = list7;
const doc8 = list8;

const doc9 = list9;
const doc10 = list10;
const doc11 = list11;
const doc12 = list12;

const doc13 = list13;
const doc14 = list14;
const doc15 = list15;

// const getDirList = (filePath) => {
//   const data = fs.readdirSync(filePath, "utf8");
//   return data;
// };

// const pathToDir = "../img/structur/";
// const fileNames = getDirList(pathToDir);

// for (const fileName of fileNames) {
//   `<div><h3>Группа ${fileName}</h3><embed type="application/pdf" src=${pathToDir}/>${fileName}.jpg></div>`
// }

export function Structur() {
  return (
    <div className="main-page main-container structur">
      {/* <a href="https://gukolomna.ru/studentu/schedule/">Расписание</a> */}
      {/* <embed type="application/pdf" src={pdf2} width="500" height="900" /> */}
      <div>
        <h3>Группа 20ИНФ-о-51</h3>
        <embed type="application/pdf" src={`${doc1}`} />
      </div>{" "}
      */}
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
      <div>
        <h3>Группа 22МА-о-31</h3>
        <embed type="application/pdf" src={`${doc5}`} />
      </div>
      <div>
        <h3>22ФА-о-31</h3>
        <embed type="application/pdf" src={`${doc6}`} />
      </div>
      <div>
        <h3>22ХИ-о-31</h3>
        <embed type="application/pdf" src={`${doc7}`} />
      </div>
    </div>
  );
}
