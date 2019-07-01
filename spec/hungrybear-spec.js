import { bear } from '../src/hungrybear.js';

describe('HungryBear', function() {
  let fuzzy = bear;                 

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.foodLevel = 10;
    fuzzy.name = "Fuzzy";
    fuzzy.rageLevel = 0
    fuzzy.sleepiness = 0;
    fuzzy.setHunger();
    fuzzy.enrage();
    fuzzy.hibernate();
    // fuzzy.setRampageMeter();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });

  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function() {
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without feeding', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should return that the bear ate blueberries and the food level should go up 5', function() {
    expect(fuzzy.eatSmall("blueberries")).toEqual("The bear ate the blueberries! Food level goes up by 5!");
    expect(fuzzy.foodLevel).toEqual(15);
  });

  it('should get mauled if rage meter over 40', function() {
    jasmine.clock().tick(40001);
    expect(fuzzy.didYouGetMauled()).toEqual(true);
  });

  it('should go to sleep if sleepiness is over 15', function () {
    fuzzy.sleepiness = 16
    expect(fuzzy.goingToSleep()).toEqual(true);
  });



  it('should hibernate if bears sleepiness is over15 ', function() {
    // fuzzy.hibernate()
    jasmine.clock().tick(15001);
    console.log(fuzzy.sleepiness)
    expect(fuzzy.goingToSleep()).toEqual(true);
  });

  // it ('should wake you up if ')
  // it('should maul you if the rage meter is 25 or above', function() {
    // jasmine.clock().tick(1)
  // });

});
