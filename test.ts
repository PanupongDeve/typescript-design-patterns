

const input = 'abc123';


const getNumberFromText = (input: string) => {
    let count = 0; 
    let numberArray = [];
    let result = 0;

    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        
        if (isNumber(char)) {
            count++;
            const changedCharToNumber = changeCharToInt(char);
            numberArray.push(changedCharToNumber);
        }

    }

    

    numberArray.forEach(element => {
        if (count > 0) {
            result += element * Math.pow(10, count-1);
            count --;
        }
        
    });
    

    return result;
}

const isNumber = (char) => {
    let charCodeZero = "0".charCodeAt(0);
    let charCodeNine = "9".charCodeAt(0);
    
    return char.charCodeAt(0) >= charCodeZero && char.charCodeAt(0) <= charCodeNine;
}

const changeCharToInt = (char) => {
    return char.charCodeAt(0) - 48;
}

const result = getNumberFromText(input);


console.log(result);