





//Lựa chọn 8: 
//Lựa chọn 9: In chuỗi đảo ngược của một chuỗi mà người dùng nhập.
//Lựa chọn 10: Thoát khỏi chương trình.

let choice
let _name
let checkNumber
do{

choice = prompt(`
Lựa chọn 1: Nhập tên của người dùng.
Lựa chọn 2: Nhập tuổi của người dùng.
Lựa chọn 3: In tên và tuổi của người dùng.
Lựa chọn 4: In bảng cửu chương của một số.
Lựa chọn 5: Kiểm tra số nhập vào là số chẵn hay lẻ.
Lựa chọn 6: Tính tổng các số từ 1 đến N (N do người dùng nhập).
Lựa chọn 7: In các số trong một dãy (người dùng nhập dãy số).
Lựa chọn 8: Kiểm tra số nhập vào có phải là số nguyên tố hay không.
Lựa chọn 9: In chuỗi đảo ngược của một chuỗi mà người dùng nhập.
Lựa chọn 10: Thoát khỏi chương trình.
`)
choice = praseInt(choice);

switch (choice) {
    case '1': // Nhập tên của người dùng.
        _name = prompt("Nhập tên của bạn vào đây nhé...")
        break;
    case '2':// Nhập tuổi của người dùng.
        age = +prompt("Nhập tuổi của bạn vào đây nhé")
        break;
    case '3' ://In tên và tuổi của người dùng.
        console.log(`Bạn tên là ${_name} hiện đang ${age} tuổi đúng nhỉ !`);
        break;
    case '4':// In bảng cửu chương của một số.
            let number = +prompt("Nhập bảng cửu chương mà bạn mong muốn")
        console.log("Bảng cửu chương", number);
        for ( let i = 1; i <=10; i++){
            console.log(`${number} x ${i} = ${number * 1}`); }  
        break;
    case '5': // Kiểm tra số nhập vào là số chẵn hay lẻ.
        checkNumber = +prompt("Nhập số cần kiểm tra")
        if (checkNumber % 2 === 0){
            console.log(`${checkNumber} là số cần tìm`); }
        break;
    case '6': // Tính tổng các số từ 1 đến N (N do người dùng nhập).
        let numberInt = prompt("Nhập số mà bạn muốn")
        let sum = 0;
        for(let i = 1; i <= numberInt; i++){
            sum = sum + i;
        }console.log(sum);
        break;
    case '7': // In các số trong một dãy (người dùng nhập dãy số).
        let n = +prompt("Nhập số");

        for (let q = 1, q <= n; q++){
            console.log(q);
            if (q === n)
                break;
        } console.log(q);
        
        break;
    case '8': //Kiểm tra số nhập vào có phải là số nguyên tố hay không.
        let ok = +prompt("Nhập vào số để kiểm tra")
        let il = ok -1;
        if (ok <= 1 || isNan(ok)){
            console.log("Đây không phải số nguyên tố");
        } else {
            let pl = true;
            for (let i = 2; i <= Math.sprt(ok); i++)
                if (ok % i === 0){
                    pl = false; break;
                }
                if (pl){
                    console.log(`${ok} là số nguyên tố`);
                } else {
                    console.log(`${ok} KHÔNG PHẢI là số nguyên tố`);
                }
        }
        break;
    case '9':// In chuỗi đảo ngược của một chuỗi mà người dùng nhập.
        let input = prompt("Hãy nhập vào một chuỗi các ký tự mà bạn thích");
        let reversed = "";
        for (let i = input.length - 1; i >= 0; i--){
            sum = sum + input[i];
        }  console.log(sum);
        break;
    case '10':
        break;
        
    default:
        break;
} 
} while(choice !== 10);