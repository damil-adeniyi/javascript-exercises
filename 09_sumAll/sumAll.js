const sumAll = function(start, end) {
    let newArray = [];
for(let i = start; i <= end; i++){
    newArray.push(i);
    
}
let result = newArray.reduce((sum, current) => sum + current, 0)

return result;

};

console.log(sumAll(1, 4));


// Do not edit below this line
module.exports = sumAll;
