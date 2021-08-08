/* To find the largest of five numbers, create a JavaScript conditional statement. Print the result. ( only use conditional statement)
Numbers of samples: -5, -2, -6, -1, 0
Result: 0 */
function largest_num_with_conditional(number){
	let largestNumber = Number.MIN_SAFE_INTEGER

    //0
	if(largestNumber < number[0]) {
		largestNumber = number[0]
	}
	else if(largestNumber < number[1]) {
		largestNumber = number[1]
	}
	else if(largestNumber < number[2]) {
		largestNumber = number[2]
	}
	else if(largestNumber < number[3]) {
		largestNumber = number[3]
	}
	else if(largestNumber < number[4]) {
		largestNumber = number[4]
	}
	
	//1
	if(largestNumber < number[0]) {
		largestNumber = number[0]
	}
	else if(largestNumber < number[1]) {
		largestNumber = number[1]
	}
	else if(largestNumber < number[2]) {
		largestNumber = number[2]
	}
	else if(largestNumber < number[3]) {
		largestNumber = number[3]
	}
	else if(largestNumber < number[4]) {
		largestNumber = number[4]
	}

	//2
	if(largestNumber < number[0]) {
		largestNumber = number[0]
	}
	else if(largestNumber < number[1]) {
		largestNumber = number[1]
	}
	else if(largestNumber < number[2]) {
		largestNumber = number[2]
	}
	else if(largestNumber < number[3]) {
		largestNumber = number[3]
	}
	else if(largestNumber < number[4]) {
		largestNumber = number[4]
	}

	//3
	if(largestNumber < number[0]) {
		largestNumber = number[0]
	}
	else if(largestNumber < number[1]) {
		largestNumber = number[1]
	}
	else if(largestNumber < number[2]) {
		largestNumber = number[2]
	}
	else if(largestNumber < number[3]) {
		largestNumber = number[3]
	}
	else if(largestNumber < number[4]) {
		largestNumber = number[4]
	}

	//4
	if(largestNumber < number[0]) {
		largestNumber = number[0]
	}
	else if(largestNumber < number[1]) {
		largestNumber = number[1]
	}
	else if(largestNumber < number[2]) {
		largestNumber = number[2]
	}
	else if(largestNumber < number[3]) {
		largestNumber = number[3]
	}
	else if(largestNumber < number[4]) {
		largestNumber = number[4]
	}
	console.log(largestNumber)
}
let temp = prompt('num 1?')
let inpArr = []
inpArr.push(temp)
temp = prompt('num 2?')
inpArr.push(temp)
temp = prompt('num 3?')
inpArr.push(temp)
temp = prompt('num 4?')
inpArr.push(temp)
temp = prompt('num 5?')
inpArr.push(temp)
largest_num_with_conditional(inpArr)