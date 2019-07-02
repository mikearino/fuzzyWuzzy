
import './styles.css';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { bear } from './src/hungrybear.js';

$(document).ready(function () {

  $('#bear').submit(function (event) {
    event.preventDefault();
    const garbageBear = new bear (foodLevel, timeBeforeHaul);//creates bearObject
    const hungryMan = bear.setHunger();
    const checkForDeath = bear.didYouDie();
    const goinIn = bear.dive();
    const headedToDump = bear.outOfTime();
    var goal = $('#goal').val();
    var output = pingPong(goal);
    output.forEach(function (element) {
      $('#solution').append('<li>' + element + '</li>');
    });
  });
});
