//BT1:
var binh = 27;
var minh=binh  / 3;
var sachcanchuyen = 0;

	while(binh != minh * 2){
		minh++;
		binh--;
		sachcanchuyen++;
	}
document.write('So sach can chuyen la : ' +sachcanchuyen);
//BT2:
document.write('<br>');
var tien = 2000;
var keo = 0;
var vokeo = 0;
while(tien > 0) {
	tien = tien - 200;
	keo++;
	vokeo++;
	// doi vo keo
	while (vokeo >= 2){
		vokeo = vokeo - 2;
		keo++;
		vokeo++;
	}
}
document.write(' So keo mua duoc la : ' +keo);
//BT3
document.write('<br>');
function phuongan() {
	var a, b, c;
	var tong = 1000000;
	var n = 0;
	for(a = 0; a <= tong/10000; a++) {
		for(b = 0 ; b <= tong/20000 ; b++) {
			for(c = 0; c <= tong/50000; c++) {
				if(a * 10000 + b * 20000 + c * 50000 == tong){
					n++;
				}
			}
		}
	}
	document.write("phuong an chia tien la :\n");
	document.write(n);
}
phuongan();
