
import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bear } from './../src/hungrybear.js';

$(document).ready(function () {

  const garbageBear = bear;
  $('#bear').click(function (event) {
    event.preventDefault();
    console.log(garbageBear)
    const hungryMan = bear.setHunger();
    console.log(hungryMan);
    const checkForDeath = bear.didYouDie();
    console.log(checkForDeath);
    const goinIn = bear.dive();
    console.log(goinIn);
    const headedToDump = bear.outOfTime();
    console.log(headedToDump);
    // var goal = $('#goal').val();
    // var output = pingPong(goal);
    // output.forEach(function (element) {
    //   $('#solution').append('<li>' + element + '</li>');
    // });
  });
  $('#stop').click(function(event) {
    event.preventDefault();
    const goinOut = grabGarbage();
  })
});
