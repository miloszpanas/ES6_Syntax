'use strict';

var greeting = 'Hello user!';
function greetWorld(isGreeting) {
  if (isGreeting) {
    var _greeting = 'Hellow World!';
    return _greeting;
  }
  return greeting;
}
greetWorld(false);
