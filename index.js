const numb1 = 1;
const number = "1";
console.log(numb1 === number);
console.log(numb1 == number);
// 8. Гурвалжингийн периметрийг олох
console.log("Гурвалжингийн периметрийг олох");
const a = 12;
const b = 5;
const c = 9;
console.log("Гурвалжины пириметр=" + a + b + c);
// 9. Тойргийн талбайг олох
console.log("Тойргийн талбайг олох");
const r = 7;
const pi = 3.14;
console.log("Тойргийн радиус=" + pi * r * r);
// 10. m = y2-y1/x2-x1 хариуг олох
console.log("m = y2-y1/x2-x1 хариуг олох");
const y2 = 5;
const y1 = 3;
const x2 = 6;
const x1 = 4;
const m1 = y2 - y1;
const m2 = x2 - x1;
console.log("Илэрхийлэлийн хариу=" + m2 / m1);
// 11. 15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу.
console.log(
  "15 МB дата 3 секундэд манай интернэт онлайнаар татаж чаддаг бол түүнийг BIT Rate-ийг олно уу."
);
const mb = 15;
const bit = 8000000;
console.log("bit=" + (mb / 3) * bit);
// 12. side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол.
console.log(
  "side1, side2, side3 гэсэн хувьсагчдад гурвалжны гурван талыг онооно. Ийнхүү гурван тал өгөдсөн байхад үед гурвалжны талбайг ол."
);
const side1 = 12;
const side2 = 5;
const side3 = 8;
const p = side1 + side2 + side3;
const a1 = p - side1;
const b1 = p - side2;
const c1 = p - side3;
const s = Math.sqrt(p * a1 * b1 * c1);
console.log("Гурвалжингийн талбай=" + s);
// 13. Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.
console.log("Өгсөн тоог цельсээс фаренгейт рүү хөрвүүл.");
const celsius = 35;
const fahrenheit = 35 * 34;
console.log(" celsius to fahrenheit=" + fahrenheit);
// 14. Хоёр( багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )
console.log(
  "Хоёр( багийн дундаж оноог олно уу. ( A team - 96, 108, 89; B team - 88, 91, 110 )"
);
const aTeam1 = 96;
const aTeam2 = 108;
const aTeam3 = 89;
const bTeam1 = 88;
const bTeam2 = 91;
const bTeam3 = 110;
const avarage = aTeam1 + aTeam2 + aTeam3 + bTeam1 + bTeam2 + bTeam3;
console.log(" Teams avarage= " + avarage / 6);
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
console.log("cm -г inch рүү хөрвүүлэх. inch -г cm рүү хөрвүүлэх");
const cm = 12;
const inch = 40;
console.log("cm to inch=" + 12 * 0.4);
console.log("inch to cm=" + 40 / 0.4);
// 17. Гараас дугуйн радиус буюу r орж ирэхэд тухайн дугуйн эзэлхүүнийг ол. Гараас дугуйн радиус буюу r, орж ирэхэд тухайн дугуйн хүрээний уртыг ол.
console.log(
  "Гараас дугуйн радиус буюу r орж ирэхэд тухайн дугуйн эзэлхүүнийг ол. Гараас дугуйн радиус буюу r, орж ирэхэд тухайн дугуйн хүрээний уртыг ол."
);
let radius = prompt("Please enter radius","");
console.log("Дугуйн эзэлхүүн=" + radius * radius * radius);
// 18. 3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич
console.log("3 оронтоо тооны хамгийн эхний цифрийг олох илэрхийлэл бич");
const num = 123;
const firstNumber = parseInt(num / 100);
console.log("First number is=" + firstNumber);
//19. Өгөгдсөн жилийг өндөр жил мөн эсэхийг шалгаад хэрвээ мөн бол өндөр жил мөн үгүй бол үгүй гэж хариулна уу.
//Өндөр жил гэдэг нь 4 жилд нэг удаа болдог бөгөөд тэр нь 2-р сар 29 хоногтой үед тохиолддог. Энэ нь 4-д хуваагдаж
//байвал мөн, 100 хуваагдаж байвал өндөр жил биш. Харин 400 жилд бүтнээрээ хуваагдаж байвал мөн.
let year = prompt("Жилээ оруулана уу", " ");
if (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))
  console.log("Энэ жил өндөр жил байна");
else console.log("Энэ жил өндөр жил биш");
//20. Гончигсумлай хоолны газар оров. Орсон хоолны газар нь 5000₮ - 30000₮ хооронд 15% нэмж төлдөг, бусад үед 20% - ийг
//нэмж төлдөг бол. Эдгээр тохиолдолуудад нийт хэдийг төлөхийг олно уу. Эдгээр тохиолдолуудад тус бүр хэдийг төлөх вэ? 3000₮,
//27500₮, 100000₮.
const price1 = 3000;
const price2 = 27500;
const price3 = 100000;
const taxRate1 = 0.15;
const taxRate2 = 0.2;
if (
(price1 <= 5000 && price1 >= 30000) ||
 (price2 <= 5000 && price2 >= 30000) ||
(price3 <= 5000 && price3 >= 30000))
{
    console.log("ehnii hool 20% tax=" + (price1 * taxRate2 + price1));
    console.log("daraagiin hool 20% tax=" + (price2 * taxRate2 + price2));
    console.log("suuliin hool 20% tax=" + (price3 * taxRate2 + price3));
}
else{
    console.log("ehnii hool 15% tax=" + (price1 * taxRate1 + price1));
    console.log("daraagiin hool 15% tax=" + (price2 * taxRate1 + price2));
    console.log("suuliin hool 15% tax=" + (price3 * taxRate1 + price3));
}
//21. Багш сурагчдын эцсийн шалгалтын дүнг дүгнэхээр болжээ
//1. Бат - 67 оноо, Онц Дүмд - 59 оноо авчээ.
//2. Шалгалтын онооноос хамааран багш тодорхой дүнгийн жагсаалт гаргах ёстой бөгөөд энэ нь
//a. Хэрвээ оноо 60 хувиас доош байвал (60 орохгүй) - Маш муу
//b. Хэрвээ оноо 60 - 70 (70 орохгүй) хооронд байвал - Хангалттай
//c. Хэрвээ оноо 70 - 80 (80 орохгүй) хооронд байвал - Дунд
//d. Хэрвээ оноо 80 - 90 (90 орохгүй) хооронд байвал - Сайн
//e. Хэрвээ оноо 90 - 100 хооронд байвал - Маш сайн гэсэн үнэлгээг өгч байгаа юм байна.
//3. Тэгвэл тухайн сурагчдыг тэнцсэн болоод тэнцээгүй эсэхийг жагсааж доорх хэлбэрээр НЭР - АВСАН ОНОО - ҮНЭЛГЭЭ гэсэн маягаар console дээр харуулна уу.
const Bat=67;
const Onts=59;
if(Bat<60 || Onts<60)
{
    console.log("Mash muu");
}
else if(Bat>=60 && Bat<70)
{
    console.log("Hanganalttай");
}
else if(Bat>=70 && Bat<80)
{
    console.log( "Dund");
}
else if(Bat>=80 && Bat<90)
{
    console.log("Sain");
}
else
{
    console.log("Mash sain"); 
}