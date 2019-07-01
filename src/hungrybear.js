export let bear = {
  foodLevel: 10,
  rageLevel: 0,
  sleepiness: 0,
  setHunger: function() {
    const hungerInterval = setInterval(() => {
      this.foodLevel--;
      if (this.didYouGetEaten() == true) {
        clearInterval(hungerInterval);
        return "You got eaten!";
      }
    }, 1000);
  },
  didYouGetEaten: function() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  },
  feed: function(amount) {
    let that = this;
    return function(food) {
      that.foodLevel += amount
      return `The bear ate the ${food}! Food level goes up by ${amount}!`
    }
  },
  enrage: function() {
    const rageInterval = setInterval(() => {
      this.rageLevel += 1;
      if (this.didYouGetMauled() == true) {
        clearInterval(rageInterval);
        return "You got mauled!";
      }
    }, 1000);
  },
  didYouGetMauled: function() {
    if (this.rageLevel < 40) {
      return false;
    } else {
      return true;
    }
  },
  hibernate: function() {
    const sleepInterval = setInterval(() => {
      this.sleepiness++;
      console.log(this.sleepiness);
      if (this.goingToSleep() == true) {
        clearInterval(sleepInterval);
        return "ZZZzzzzzzz";
      }
    }, 1000);
  },
  goingToSleep: function() {
    if (this.sleepiness >= 15) {
      return true;
    } else {
      return false;
    }
  }
};

bear.eatSmall = bear.feed(5);
bear.eatMedium = bear.feed(10);
bear.eatLarge = bear.feed(15);
bear.eatYuck = bear.feed(-10);
bear.eatPowerUp = bear.feed(50);
bear.eatSpecialBonus = bear.feed(100);
bear.eatWeirdThing = bear.feed(Math.floor((Math.random() * 20) + 1));





























  //   constructor(name) {
  //     this.name = name;
  //     this.foodLevel = 10;
  //     this.rageMeter = 0;
  //   }
  //
  //   setHunger() {
  //     setInterval(() => {
  //       this.foodLevel--;
  //     }, 1000);
  //   }
  //
  //   setRampageMeter() {
  //     setInterval(() => {
  //       this.rageMeter ++;
  //     }, 1000);
  //   }
  //
  //   didYouGetMauled() {
  //     if (this.rageMeter >= 40) {
  //       return true
  //     } else {
  //       return false
  //     }
  //   }
  //
  //   digThroughTrash () {
  //     if (this.rageMeter >= 25) {
  //       this.foodLevel -= 3
  //     }
  //
  //   // didYouWakeUp() {
  //   //   if (this.rageMeter >= 20) {
  //   //     return true;
  //   //   } else {
  //   //     return false;
  //   //   }
  //   // }
  //
  //   didYouGetEaten() {
  //     if (this.foodLevel > 0) {
  //       return false;
  //     } else {
  //       return true;
  //     }
  //   }
  //
  //
  //
  //   feed() {
  //     this.foodLevel = 10;
  //   }
  // }
