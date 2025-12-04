

//Bài 1: Nhập vào hai số a và b, và kiểm tra xem a có chia hết cho b hay không và hiển thị ra thông báo bằng console hoặc alert

let numberA = +prompt("Nhập số a")
let numberB = +prompt("Nhập số b")
let result = numberA % numberB
if (result > 0){
    alert("Không chia hết cho nhau !");
} else if (result === 0){
    alert("Hai giá trị chia hết cho nhau ... ! Binggo  !");
} else {
    alert("Bạn hãy điền lại nhé ... !");
}


//Bài 2: Nhập tuổi và in ra kết quả nếu tuổi học sinh đó không đủ điều kiện vào học lớp 10 và hiển thị ra thông báo bằng console hoặc alert.

let age = +prompt("Hãy nhập tuổi của bạn vào đây nhé ...!");

if(age >= 15){
    alert("Bạn đã đủ tuổi nhập học lớp 10 rồi nhé ... !")
} else if (age < 15){
    alert("Bạn chưa đủ tuổi nhập học Cấp 3 nhé ... ! Xin chia buồn ahihi");
} else {
    alert("Bạn hãy kiểm tra lại nơi nhập tuổi naz ^^!")
}


Bài 3: Nhập một số nguyên bất kỳ và in kết quả ra màn hình để nói cho người dùng biết số đó là lớn hay nhỏ hơn 0

let numberInt = +prompt("Plase input number in here")

if (numberInt === 0){
    alert(`Giá trị ${numberInt} bạn đưa vừa thuộc số Âm - Dương nên nó là dạng không xác định là Lớn or Nhỏ hơn số 0 nhé .... !`)
} else if (numberInt > 0){
    alert(`Giá trị ${numberInt} lớn hơn số 0 rồi nhé ! `)
} else {
    alert(`Giá trị ${numberInt} mà bạn đưa ra nhỏ hơn số 0 nhé !`)
}


//Bài 4: Nhập 3 số nguyên và tìm giá trị lớn nhất của ba số nguyên đó

let numberA = +prompt("Please input number first time!")
let numberB = +prompt("Please enter the number a second time!!")
let numberC = +prompt("Please enter the number for the 3rd time!!!")

if (numberA > numberB && numberB > numberC){
    alert("Số đầu tiên là số LỚN nhất !")
} else if (numberA < numberB && numberB > numberC){
    alert("Số thứ 2 là số LỚN nhất !!")
} else if(numberC > numberB && numberC > numberA){
    alert("Số thứ 3 là số LỚN nhất !!!")
} else if (numberA === numberB && numberB < numberC){
    alert("Số thứ 3 là số LỚN nhất !!!")
} else if (numberA === numberC && numberC < numberB){
    alert("Số thứ 2 là số LỚN nhất !!")
} else if (numberB === numberC && numberC < numberA){
    alert("Số đầu tiên là số LỚN nhất !")
} else if(numberA === numberB === numberC){
    alert("Cả 3 số đều bằng nhau")
} else {
    alert("Xin lỗi, không thể xác định được số nào là lớn Nhất... ! Vui lòng F5")
}






//Bài 5: Xếp hạng học lực của học sinh dựa trên các điểm bài kiểm tra, điểm thi giữa kỳ, điểm thi cuối kỳ (Xuất Sắc, Giỏi, Khá, Trung Bình, Yếu)

let a = prompt("Hãy nhập điểm giữa kì")
let b = prompt("Hãy nhập điểm cuối kì")


if (a === 10 && b === 10){
    alert("Học sinh Xuất Sắc")
} else if (a >=8 && b >= 8) {
    alert("Học sinh Giỏi")
} else if (a >= 7 && b>= 7){
    alert("Học sinh Khá")
} else if (a >= 4 && b >= 4){
    alert("Học sinh Trung bình")
} else {
    alert("Học sinh Yếu")
}
