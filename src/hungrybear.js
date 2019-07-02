import $ from 'jquery';

export let bear = {
  foodLevel: 10,
  timeBeforeHaul: 5,
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
    }, 1000);
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
    const diveInterval = setInterval(() => {
      this.timeBeforeHaul -= 1;
      $('#solution').text(this.timeBeforeHaul);
      if (this.outOfTime() == true) {
        clearInterval(diveInterval);
        return "You got hauled away to the dump!";
      }
    }, 1000)
  },
  outOfTime: function () {
    if (this.timeBeforeHaul <= 0) {
      return $('#solution').text("You got Hauled away to the dump! "),
      $('#food').text("YOU DEAD");
    } else{
      return false;
    }
  },
  grabGarbage: function () {
    // const dumpsterInterval = setInterval => {
    //   this.timeBeforeHaul = ;
    // }
  }
};




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
