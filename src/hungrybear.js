import $ from 'jquery';

export let bear = {
  foodLevel: 10,
  timeBeforeHaul: 5,
  diveInterval: '',
  // rageLevel: 0,
  // sleepiness: 0,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      $('#food').text(this.foodLevel);
      if (this.didYouDie() == true) {
        clearInterval(hungerInterval);
        return "You didn't eat enough trash!";
      }
    }, 150);
  },
  didYouDie: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return $('#food').text("YOU DEAD");
    }
  },
  feed: function(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return `The bear ate the ${food}! Food level goes up by ${amount}!`
    }
  },
  foodGet: function () {

  },
  dive: function() {
    this.diveInterval = setInterval(() => {
      console.log(this.diveInterval);
      this.timeBeforeHaul -= 1;
      $('#solution').text(this.timeBeforeHaul);
      if (this.outOfTime() == true) {
        clearInterval(this.diveInterval);
        return "You got hauled away to the dump!";
      }
    }, 200)
  },
  outOfTime: function () {
    if (this.timeBeforeHaul <= 0) {
      return $('#solution').text("You got Hauled away to the dump! "),
      $('#food').text("YOU DEAD");
    } else{
      return false;
    }
  },
  stopDiveInterval: function() {
    console.log(this.diveInterval);
    clearInterval(this.diveInterval);
    this.timeBeforeHaul = 5;
    $('#solution').text(this.timeBeforeHaul);
  },
  garbageGrab: function() {
   if (this.timeBeforeHaul === 5) {
   } else if (this.timeBeforeHaul === 4) {
      $('#score').text("Worms! ")
     this.foodLevel+= 1;
   } else if (this.timeBeforeHaul === 3) {
      $('#score').text("Rotten Apple!")
     this.foodLevel+= 3;
   } else if (this.timeBeforeHaul === 2) {
      $('#score').text("Bad Cake! ")
     this.foodLevel+=25;
   } else if (this.timeBeforeHaul === 1) {
     $('#score').text("Double Cheeseburger w/ fries! ")
     this.foodLevel+=50;
   }


  }
};




// grabGarbage: function (timer) {
//   clearInterval(timer)
//   this.timeBeforeHaul = 5;
//   }
// }
    // bear.eatSmall = bear.feed(5);
    // bear.eatMedium = bear.feed(10);
    // bear.eatLarge = bear.feed(15);
    // bear.eatYuck = bear.feed(-10);
    // bear.eatPowerUp = bear.feed(50);
    // bear.eatSpecialBonus = bear.feed(100);
    // bear.eatWeirdThing = bear.feed(Math.floor((Math.random() * 20) + 1));


    // enrage: function() {
    //   const rageInterval = setInterval(() => {
    //     this.rageLevel += 1;
    //     if (this.didYouGetMauled() == true) {
    //       clearInterval(rageInterval);
    //       return "You got mauled!";
    //     }
    //   }, 1000);
    // },
