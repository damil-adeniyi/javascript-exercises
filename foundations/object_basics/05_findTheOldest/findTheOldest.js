 const findTheOldest = (arr) => {

      // Check for max age
        let emptyArr = [];
        let age = arr.map((person) => {

          if(person.yearOfDeath === undefined){
            const currentYear = new Date().getFullYear();
            return currentYear - person.yearOfBirth
          }else{return person.yearOfDeath - person.yearOfBirth;}
          
           })
        emptyArr.push(age);
        let max = Math.max(...age);

      //  prints out object     
        let oldestPerson = arr.find(person => {
      // We must recalculate age logic to compare it to max
          const death = person.yearOfDeath || new Date().getFullYear();
          const personAge = death - person.yearOfBirth;
    
          return personAge === max; // Returns the first object that matches
         });

      return oldestPerson;
    }

// Do not edit below this line
module.exports = findTheOldest;
