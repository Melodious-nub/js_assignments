/* Write a JavaScript program to construct the following pattern, using a nested for loop. (
* 
* *
* * * 
* * * * 
* * * * *)
*/
function pyramid(rowNum){
    let i = 1
    let j = 1

    while (i <= rowNum) {
        while(j <= i){
            process.stdout.write("* ");
            j += 1
        }
        console.log()
        i += 1
        j = 1     
    }
}
rowNum = 5
pyramid(rowNum)
