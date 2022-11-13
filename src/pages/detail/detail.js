"use strict";
const check = document.querySelector(".brand");
let num;
let type_of_phone;
let string_content = check.textContent.toLowerCase().split(" ");
if (string_content[0] === "iphone") {
  num = 1;
  type_of_phone = "apple";
} else if (string_content[0] === "xiaomi") {
  num = 2;
  type_of_phone = "xiaomi";
} else if (string_content[0] === "oppo") {
  num = 3;
  type_of_phone = "oppo";
} else if (string_content[0] === "samsung") {
  num = 4;
  type_of_phone = "samsung";
}
const btnColor = document.querySelector(".big-img");
const btnSelectColor = document.querySelector(`.select_${num}`);
let btnSelectImg = document.getElementsByClassName(`small-${num}`);
console.log(btnSelectImg);

///////////////
/* let ok = 1;
// const displayImg2 = function () {
//   btnSelectImg[0].onclick = function () {
//     btnColor.src = btnSelectImg[0].src;
//   };
//   btnSelectImg[1].onclick = function () {
//     btnColor.src = btnSelectImg[1].src;
//   };
//   btnSelectImg[2].onclick = function () {
//     btnColor.src = btnSelectImg[2].src;
//   };
//   btnSelectImg[3].onclick = function () {
//     btnColor.src = btnSelectImg[3].src;
//   };
// };

// const displayImg1 = function (type_of_phone) {
//   const run1 = btnSelectColor.addEventListener("click", function () {
//     ok = Number(btnSelectColor.value);
//     if (ok === 0) {
//       ok = 1;
//       btnColor.src = `/src/asset/${type_of_phone}/${type_of_phone}${ok}.png`;
//       console.log(ok);
//     } else {
//       btnColor.src = `/src/asset/${type_of_phone}/${type_of_phone}${ok}.png`;
//       console.log(ok);
//     }
//   });
// };
// displayImg1(type_of_phone);
// displayImg2();*/
///////////////
let ok;
const run1 = btnSelectColor.addEventListener("click", function () {
  ok = Number(btnSelectColor.value);
  if (ok === 0) {
    ok = 1;
    btnColor.src = `/src/asset/${type_of_phone}/${type_of_phone}${ok}.png`;
    console.log(ok);
  } else {
    btnColor.src = `/src/asset/${type_of_phone}/${type_of_phone}${ok}.png`;
    console.log(ok);
  }
});

btnSelectImg[0].onclick = function () {
  btnColor.src = btnSelectImg[0].src;
};
btnSelectImg[1].onclick = function () {
  btnColor.src = btnSelectImg[1].src;
};
btnSelectImg[2].onclick = function () {
  btnColor.src = btnSelectImg[2].src;
};
btnSelectImg[3].onclick = function () {
  btnColor.src = btnSelectImg[3].src;
};
