import React from "react";
import fs from "fs";

import list1 from "../img/structur/20ИНФ-о-51.pdf";
import list2 from "../img/structur/20ФИ-о-51.pdf";

const doc1 = list1;
const doc2 = list2;

// Кол-во файлов в директории
const fs2 = require(fs);
const dir = "../img/structur/";
let filesInDir = 0;

fs2.readdir(dir, (err, files) => {
  console.log(files);
  console.log(files.length);
});

// Массив файлов
// const docs = [];
// for (let i = 0; i < filesInDir; i++) {
//   docs.push[`../img/structur/${i}.pdf`];
// }
// const pdf1 = list1;
// const pdf2 = list2;

export function Structur() {
  return (
    <div className="main-page main-container structur">
      {/* <a href="https://gukolomna.ru/studentu/schedule/">Расписание</a> */}
      {/* <embed type="application/pdf" src={pdf2} width="500" height="900" /> */}

      <div>
        <h2>Группа 20ИНФ-о-51</h2>
        <embed type="application/pdf" src={`${doc1}`} />
      </div>

      <div>
        <h2>Группа 20ФИ-о-51</h2>
        <embed type="application/pdf" src={`${doc2}`} />
      </div>
    </div>
  );
}
