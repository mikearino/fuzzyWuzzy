//
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bear } from './../src/hungrybear.js';

$(document).ready(function () {

  $('#bear').click(function (event) {
    event.preventDefault();
    // console.log(garbageBear)
    bear.setHunger();
    // console.log(hungryMan);
    // const checkForDeath = bear.didYouDie();
    // console.log(checkForDeath);
    bear.dive();
    // console.log(goinIn);
    // const headedToDump = bear.outOfTime();
    // console.log(headedToDump);
    // var goal = $('#goal').val();
    // var output = pingPong(goal);
    // output.forEach(function (element) {
    //   $('#solution').append('<li>' + element + '</li>');
    // });
  });
  $('#stop').click(function(event) {
    event.preventDefault();
    // const goinOut = grabGarbage();
    bear.garbageGrab();
    bear.stopDiveInterval()
    // clearInterval(goinIn);
    // const stopTimer = grabGarbage
  })
});
