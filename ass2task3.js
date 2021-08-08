/* Write a javascript program to add items to the beginning 
and delete from the beginning item of an array without using shift/unshift */

function dlt_first_item(arr){
    let i = 0
    while(i < arr.length-1){
        arr[i] = arr[i+1]
        i += 1
    }
    arr.splice(arr.length - 1,arr.length - 1)
    return arr
}

function add_item(arr, newItem){
    let i = arr.length
    while (i >= 1) {
        arr[i] = arr[i-1]
        i -= 1
    }
    arr[0] = newItem
    return arr
}

function is_empty(arr){
    if (arr.length == 0){
        return true
    }
    return false
}

let arr = []
let newItem, choice

while(1){
    choice = prompt('press 0 for exit\npress 1 for add\npress 2 for delete\npress 3 for show arr\n')

    if (choice == 0) {
        console.log('Terminating...')
        break    
    } 
    else if(choice == 1) {
        newItem = (prompt('input your item :'))
        arr = add_item(arr, newItem)
    } 
    else if(choice == 2 && is_empty(arr) == false) {
        arr = dlt_first_item(arr, newItem)
    } 
    else if(choice == 2 && is_empty(arr) == true) {
        console.log('Sry array empty')    
    } 
    else if (choice == 3) {
        console.log(arr)    
    }     
}
