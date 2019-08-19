// Ve nha nghien cuu truoc:
// Vong lap for, while, do while
// Cau dieu kien: if else, switch case
// Tham so cua ham, tham so mac dinh
function mySum() {
	var a = 5, b = 7;
	document.write(a + b);
}
document.write('<br>');
mySum();

function mySum2() {
	var a = 6, b = 9;
	var c;
	c = a + b;
	return c;
}

document.write('<br>');
var x;
x = mySum2();
document.write(x);

// tham so cua ham
function mySum3(a, b) {
	var c;
	c = a + b;
	return c;
}

document.write('<br>');
var y;
y = mySum3(4, 8);
document.write(y);


document.write('<br>');
document.write(mySum3(5, 3));

// tham so mac dinh cua ham
function mySum4(a = 9, b = 2) {
	var c;
	c = a + b;
	return c;
}

document.write('<br>');
document.write(mySum4());

document.write('<br>');
// cau lenh dieu kien
// 1.
//if (dieukien) {
	// thuc hien cac lenh o day neu dieukien la dung
//}
var a = 4;
if (a == 5) {
	document.write("So a la 5");
}

document.write('<br>');
// 2.
// if (dieukien) {
	// thuc hien cac lenh o day neu dieukien la dung
// } else {
	// thuc hien cac lenh o day neu dieukien la sai
// } 
var a = 4;
if (a == 5) {
	document.write("So a la 5");
} else {
	document.write("So a khong phai la 5 <br>");
	document.write("------ <br>");
	document.write("test if else");
}

// 3.
// if (dieukien1) {
	// thuc hien cac lenh o day neu dieukien1 la dung
// } else if (dieukien2) {
	// thuc hien cac lenh o day neu dieukien2 la dung
// } else {
	// thuc hien cac lenh o day neu dieukien2 la sai
// }
document.write('<br>');

var a = 7;
if (a == 5) {
	document.write("So a la 5");
} else if (a == 6) {
  document.write("So a la 6");
} else {
	document.write("So a khong phai la 5 hoac 6 <br>");
}


//
document.write('<br>');

var a = 4;
var b = 7;
if ((a == 5) || (a == 8)) {
	document.write("So a la 5 hoac la 8");
} else if ((a == 6) && (b == 7)) {
  document.write("So a la 6 va b = 7");
} else {
	document.write("So a khong phai la 5 hoac 6 hoac 8<br>");
}

// switch(ten_bien) {
// 	case '1':
			// thuc hien cac cau lenh o day, neu gia tri bien bang 1
// 		break;

// 	case '2':
			// thuc hien cac cau lenh o day, neu gia tri bien bang 2
// 		break;
		//...............
		//...............
// 	default:
			// thuc hien cac cau lenh o day, neu gia tri bien khac
			// cac truong hop phia ten
// 		break;

// }

//Ex: Cho mot so a cho truoc gia tri;
// Kiem tra neu so co gia tri tu 1 den 7 thi 
// ghi ra cac ngay trong tuan tuong ung
// vd: a = 1 thi ghi ra: Hom nay la thu hai
// vd: a = 2 thi ghi ra: Hom nay la thu ba
// ......
// vd: a = 7 thi ghi ra: Hom nay la chu nhat
// Neu khong thi in ra: a khong la ngay trong tuan
document.write('<br>');
var myDay = 2;
var a = 9;
switch(myDay) {
	case 1:
		document.write("Hom nay la thu hai");
		break;
	case 2:
		document.write("Hom nay la thu ba");
		if (a == 9) {
			document.write('<br>a la so 9');
		}
		break;
	case 3:
		document.write("Hom nay la thu tu");
		break;
	case 4:
		document.write("Hom nay la thu nam");
		break;
	case 5:
		document.write("Hom nay la thu sau");
		break;
	case 6:
		document.write("Hom nay la thu bay");
		break;
	case 7:
		document.write("Hom nay la chu nhat");
		break;
	default:
		document.write("Day khong phai la so cua ngay trong tuan");
		break;
}

// Cho 1 so cho truoc la gia tri cua thang trong nam tu 1 toi 12
// Neu so do khac tu 1-12 thi in ra la so nay khong phai thang cua nam
// Neu so do la thang cua nam, in ra so ngay cua thang do
// Cho them 1 so cho truoc la so nam (vi du 2019)
// Kiem tra nam do nhuan hay khong? de in ra dung so ngay cua thang 2
document.write('<br>');
var myMonth = 2;
var myYear = 2019;
// thang 1, 3, 5, 7, 8, 10, 12 co 31 ngay
// thang 4, 6, 9, 11 coa 30 ngay
// thang 2 co 28 ngay, neu nam nhuan thi thang 2 co 29 ngay
// nam nhuan la nam chia het cho 4 nhung k chia het cho 100

// vong lap
// cac cau lenh hoac hanh dong duoc lap di lap lai nhieu lan
// thi ap dung vong lap de thuc hien
switch(myMonth){
	
}

var i;
for (i = 0; i <= 10; i++) {
	document.write(i);
	document.write('<br>');
}
// i++ tuong ung voi: i = i + 1;
// i-- tuong ung voi: i = i - 1;

//BT: In ra day so tu 10 toi 0
var j;
for (j = 10; j >= 0; j--) {
	document.write(j);
	document.write('<br>');
}
document.write('-------<br>');

// vong lap while
var n = 5;
while (n < 5) {
	document.write(n);
	document.write('<br>');
	n++;
}

document.write('-------<br>');
// vong lap do...whilevar n = 5;
var n = 5;
do {
	document.write(n);
	document.write('<br>');
	n++;
} while (n < 5);

// Cho 1 day so chay tu 1 toi 100;
// Kiem tra 
// Neu so do chia het cho 3 thi in ra so n chia het cho 3
// Neu so do chia het cho 5 thi in ra so n chia het cho 5
// Neu so do chia het cho 15 thi in ra so n chia het cho 15 
// (luc nay khong in ra 2 dong n chia het cho 3 va dong n chia het cho 5)