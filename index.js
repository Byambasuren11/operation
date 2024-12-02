const numb1 = 1;
const number = "1";
console.log(numb1 === number);
console.log(numb1 == number);
// 8. Гурвалжингийн периметрийг олох
console.log("Гурвалжингийн периметрийг олох");
const a = 12;
const b = 5;
const c = 9;
console.log("Гурвалжины пириметр="+a + b + c);
// 9. Тойргийн талбайг олох
console.log("Тойргийн талбайг олох");
const r = 7;
const pi = 3.14;
console.log("Тойргийн радиус="+pi * r * r);
// 10. m = y2-y1/x2-x1 хариуг олох
console.log("m = y2-y1/x2-x1 хариуг олох");
const y2 = 5;
const y1 = 3;
const x2 = 6;
const x1 = 4;
const m1 = y2 - y1;
const m2 = x2 - x1;
console.log("Илэрхийлэлийн хариу="+m2 / m1);
// 11. 15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.
console.log("15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.");
const mb = 15;
const bit = 8000000;
console.log("bit="+(mb / 3) * bit);
// 12. side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.
console.log("side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.")
const side1 = 12;
const side2 = 5;
const side3 = 8;
const p = side1 + side2 + side3;
const a1 = p - side1;
const b1 = p - side2;
const c1 = p - side3;
const s = Math.sqrt(p * a1 * b1 * c1);
console.log("Гурвалжингийн талбай="+s);
// 13. Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.
console.log("Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.")
const celsius = 35;
const fahrenheit = 35 * 34;
console.log(" celsius to fahrenheit="+fahrenheit);
// 14. Хоёр( багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )
console.log("Хоёр( багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )")
const aTeam1 = 96;
const aTeam2 = 108;
const aTeam3 = 89;
const bTeam1 = 88;
const bTeam2 = 91;
const bTeam3 = 110;
const avarage = aTeam1 + aTeam2 + aTeam3 + bTeam1 + bTeam2 + bTeam3;
console.log(" Teams avarage= "+avarage / 6);
// 15. 2 хувьсагч зарлан 2 тоон утга өг. Тухайн 2 хувьсагчдаар Math-ийн 5н үйлдэлүүдийг (+-*/%) гүцэтгээд үр дүнг нь дараах байдлаар харуул:
// Өгөгдсөн 2 тооны нийлбэр нь 25
// Өгөгдсөн 2 тооны ялгавар нь 5
const x = 16;
const y = 8;
console.log("16 ба 8 гэсэн тооны нийлбэр=" + (x + y));
console.log("16 ба 8 гэсэн тооны ялгавар=" + (x - y));
console.log("16 ба 8 гэсэн тооны үржвэр=" + x * y);
console.log("16 ба 8 гэсэн тооны ялгавар=" + x / y);
// 16. cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх
console.log("cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх")
const cm = 12;
const inch = 40;
console.log("cm to inch=" + 12 * 0.4);
console.log("inch to cm=" + 40 / 0.4);
// 17. Гараас дугуйн радиус буюу r орж ирэхэд тухайн дугуйн эзэлхүүнийг ол. Гараас дугуйн радиус буюу r, орж ирэхэд тухайн дугуйн хүрээний уртыг ол.
console.log("Гараас дугуйн радиус буюу r орж ирэхэд тухайн дугуйн эзэлхүүнийг ол. Гараас дугуйн радиус буюу r, орж ирэхэд тухайн дугуйн хүрээний уртыг ол.")
let radius = prompt("Please enter radius", 0);
console.log("Дугуйн эзэлхүүн="+radius*radius*radius);
// 18. 3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич
console.log("3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич")
const num=123;
const firstNumber=parseInt(num/100);
console.log("First number is="+firstNumber)


