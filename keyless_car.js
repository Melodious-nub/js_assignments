var age=prompt('Your age?');
if (Number(age)>18) {
    alert("Powering On. Enjoy the ride!");
} 
else if (Number(age)<18) {
    alert("Sorry, you are too young to drive this car. Powering off");
} 
else if (Number(age)===18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!")
}




/*
var a = 10000;
/*var b = Number(prompt('de'));
if (a/10) {
    alert('1month tk available' +' '+ (a-(a/10)));
}
/
*/
mounth = 4
lone_amount = 10000
monthly_cal = []

i = 0
while(i < mounth){
    lone_amount = lone_amount - (lone_amount/10)
    monthly_cal.push(lone_amount)
    console.log(monthly_cal[i])
    i += 1
}
console.log(lone_amount);
console.log(monthly_cal[1]);