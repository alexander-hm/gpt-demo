import $ from 'jquery';
import './style.scss';

// Display timer
let num = 0;
setInterval(() => {
  // Increment counter
  num += 1;
  // Update text
  $('#main').html(`You've been on this page for ${num} seconds.`);
}, 1000);
