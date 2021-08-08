let i = -1000;
function largest (number) {
	for(x=0; x < number.length; x++) {
		if (number[x] > i) {   
			i = number[x];
		  }
		}
		console.log(i);			
	}

function largest_num_with_while(number){
	let largestNumber = Number.MIN_SAFE_INTEGER
	console.log(largestNumber)
	let i = 0, n = 5
	
	while(i < 5){
		
		console.log(number[i])
		if (largestNumber < number[i]){
			largestNumber = number[i]
		}
		i += 1
	}
	console.log(largestNumber)

}

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
// largest([-5, -10, -21, -6, -100]);


//largest_num_with_while([-5, -10, -21, -6, -100]);

var temp = prompt("Please enter your name", "Harry Potter");

largest_num_with_conditional([-100, -10, -21, -6, -1]);