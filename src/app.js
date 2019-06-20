import './styles/index.scss';
import 'jquery';
// import WOW from 'wow.js';
// const WOW = require('wowjs');
import 'popper.js';
import 'bootstrap';
import 'bootstrap/js/dist/util';
import 'bootstrap/js/dist/dropdown';

$("#slideshow > div:gt(0)").hide();

// setInterval(function() {
//   $('#slideshow > div:first')
//     .fadeOut(2500)
//     .next()
//     .fadeIn(2500)
//     .end()
//     .appendTo('#slideshow');
// }, 3000);

$('.carousel').carousel({
  interval: 500
})

// new WOW().init();

// console.log(add(100, 160))