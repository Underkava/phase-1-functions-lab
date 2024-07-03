// Code your solution in this file!
/*const weatherToday = "sunny";

function exerciseDog(dogName, dogBreed) {
  if (weatherToday === "Rainy") {
    return `${dogName} did not exercise due to rain`;
  }
  console.log(`Wake ${dogName} the ${dogBreed}`);
  console.log(`Leash ${dogName} the ${dogBreed}`);
  console.log(`Walk to the park ${dogName} the ${dogBreed}`);
  console.log(`Throw the frisbee for ${dogName} the ${dogBreed}`);
  console.log(`Walk home with ${dogName} the ${dogBreed}`);
  console.log(`Unleash ${dogName} the ${dogBreed}`);
  return `${dogName} is happy and tired!`;
}

const result = exerciseDog("Byron", "poodle");
console.log(result); // => "Byron did not exercise due to rain"
*/

function distanceFromHqInBlocks(pickuplocation){
    const theLocation =42;
    return Math.abs(pickuplocation-theLocation);
}
function distanceFromHqInFeet(pickuplocation){
    const blocks = distanceFromHqInBlocks(pickuplocation);
    const feetperblock = 264;
    return blocks*feetperblock;
}
function distanceTravelledInFeet(start, destination){
    const blocksTravelled=Math.abs(destination-start)
    const feetperblock=264;
    return blocksTravelled*feetperblock;

}
function calculatesFarePrice(start,destination){
    const distance= distanceTravelledInFeet(start,destination);
    if( distance <= 400){
        return 0;
    }else if(distance>400 && distance<=2000){
        return 2.56;
    }else if(distance>2000 &&distance<=2500){
        return 25;
    }else if(distance>2500){
        return 'cannot travel that far'
    }

}
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInFeet(50));

console.log(distanceTravelledInFeet(42, 46));
console.log(distanceTravelledInFeet(42, 52));
console.log(distanceTravelledInFeet(42, 42));
console.log(distanceTravelledInFeet(42, 48));

console.log(calculatesFarePrice(42, 46));
console.log(calculatesFarePrice(42, 52));
console.log(calculatesFarePrice(42, 42));
console.log(calculatesFarePrice(42, 48));

