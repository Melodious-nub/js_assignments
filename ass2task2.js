/*Create a JavaScript program that iterates through the integers 1 through 100.
However, for multiples of three, write "Ami" instead of the number, 
and for multiples of five, write "Tumi." Print "AmiTumi" for numbers that are multiples of three and five.*/
let i = 1

while(i <= 100){
    if (i%3 == 0 && i%5 == 0) {
        console.log('AmiTumi')
    }
    else if (i%3 == 0) {
        console.log('Ami')
    }
    else if (i%5 == 0) {
        console.log('Tumi')
    }
    else {
        console.log(i)
    }
    i += 1
}