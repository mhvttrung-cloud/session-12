// Bài 1: Sử dụng vòng lặp để đếm từ 1 đến 100. Khi số là 99, 
// hiển thị hộp thoại thông báo là đã hoàn thành.

// for (let i= 1; i<=99; i++){
//     console.log("i =" + i);
//     if (i === 99){
//         continue;
//     }
// } alert("bạn đã hoàn thành đếm đến 100 rồi nhé")


// Bài 2: Sử dụng hàm prompt() để lấy thông tin nhiệt độ hiện tại được nhập bởi người truy cập. 
// Nếu nhiệt độ nhập vào trên 100, yêu cầu người dùng giảm nhiệt độ. Nếu nhiệt độ dưới 20, 
// yêu cầu người dùng tăng nhiệt độ.

// let tem = +prompt("Nhập nhiệt độ hiện tại ... !") 

// if (tem < 20 || isNaN){
//     alert("これからなる温度が最適ではないと思いますので、再度温度を設定してください！")
// } else if (tem > 100 || isNaN){
//     alert("これからなる温度が最適ではないと思いますので、再度温度を設定してください！")
// }else {
//     alert("温度設定がバッチリですね。。。！")
// }


// Bài 3: Hiển thị ra 20 số trong dãy fibonacci đầu tiên.

// let a = 0;
// let b = 1;

// for (let i = 3; i <=20; i= i+1){
//     let c = a + b;
//     console.log(c, i);
//     a = b;
//     b = c;
// }

// Bài 4: Tìm số đầu tiên trong dãy fibonacci chia hết cho 5.
// let a = 0;
// let b = 1;

// while (true){
//     let c = a + b;
//     if (c % 5 === 0){
//         console.log
//         ("Số chia hết cho 5 trong dãy fibinacci là :", c)
//         break;
//     }
//     a = b;
//     b = c;
// }


// Bài 5: Tính tổng của 20 số đầu tiên trong dãy fibonacci.

// let a = 0;
// let b = 1;
// let sum = a + b
// for (let i = 3; i <=20; i= i+1){
//     let c = a + b;
//      sum = sum + c;
//      a = b;
//      b = c;
//     }
// console.log(sum);  

// Bài 6: Tính tổng của 30 số chia hết cho 7 đầu tiên trong các số tự nhiên.

let a = 0;
let b = 1;
 while (true){
    let c = a + b;
    for 
 }



// Bài 7: Hãy viết một chương trình in ra các số từ 1 đến 100. Nhưng nếu số chia hết cho 3 thì in ra "Fizz", 5 thì in ra "Buzz" thay vì in ra số đó. Và nếu số đó chia hết cho cả 3 và 5 thì in ra chữ “FizzBuzz”