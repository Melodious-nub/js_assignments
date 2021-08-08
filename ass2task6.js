/* Write a JavaScript function to find the first non-repeated character.
Go to the editorSample arguments : 'abacddbec'
Expected output: 'e' */

function a2t6(inpTxt){
    let tracerArr = []// [[symble, position, reapet]]
    let tempArr = [inpTxt[0], 0, 0] //// [symble, position, reapet]
    let i, j, k
    i = 0

    while (i < inpTxt.length) {
        while(j < tracerArr.length){
            if(inpTxt[i] == tracerArr[j][0]){
                tempArr = [inpTxt[i], i, 1]
                tracerArr[j][2] = 1
                break
            }
            else{
                tempArr = [inpTxt[i], i, 0]
            }
            j += 1
        }

        tracerArr.push(tempArr)
        i += 1
        j = 0
    }

    i = 0
    while (i < tracerArr.length) {
        if(tracerArr[i][2] == 0){
            return tracerArr[i][0]
        }
        i += 1
    }
    return -1
}

let editorSample = 'abacddbec'
editorSample = prompt('input your string. if output is \'-1\' there is no reapiting charecter')

console.log(a2t6(editorSample))
