// Coding Challenge #1: Basketball Score
 
const totalBasketballScore = (freeThrows, midRange, threePointers) => {
    if (freeThrows === 'number' && midRange === 'number' && threePointers === 'number') {
        let totalScore = (freeThrows * 1) + (midRange * 2) + (threePointers * 3);
        return totalScore;
    } else {
        console.log('Error, all entries must be numbers!');
    }
}
const totalBasektballScore();
console.log(totatotalBasketballScorelCost);

// Coding Challenge #2: Computer Store


const itemPrice = item => {
    switch(item) {
      case 'computer':
        return '$500'
        break;
      case 'mouse':
        return '$10'
        break;
      case 'tablet':
        return '$250'
        break;
      case 'case':
        return '$25'
        break;
      case 'router':
        return '$100'
        break;
    default: 
      return "Sorry, this item is not in the store."
    }
  }
   

  if (typeof item != 'string') {
    console.log('Error, all entries must be of type string!');
} else {
    console.log(itemPrice(item));
}

// Coding Challenge #3: What’s for dinner?

const restaurants = ['Applebees', 'Panera Bread', 'Popeyes, Chopt', 'Chick-fil-A', 'Cheesecake Factory', 'Five Guys']

const randomRestaurant = numOfRestaurants => {
    let randomRestaurantList;
    randomRestaurantList = restaurants[Math.floor(Math.random() * restaurants.length)];
}
const randomRestaurant = randomRestaurantList.push();

// Coding Challenge #4: Leap Year

function isLeapYear(year) {
    if ((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)) {
        return true;
    } else {
        return false;
    }
}

console.log(isLeapYear());
