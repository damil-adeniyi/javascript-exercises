const repeatString = function(str, num) {

};

// Do not edit below this line
module.exports = repeatString;


function repeat(str, num) {
    let string = "";
    if (num < 0){
        return "ERROR"
    }else{
        for (let i = 0; i < num; i++) {
        let result = string += str;
    }
        }return string;
}

console.log(repeat("hey", 4));


