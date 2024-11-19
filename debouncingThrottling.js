const appDiv = document.getElementById('app');

function handleClick(type) {
  return function () {
    console.log(type, 'clicked!!!');
  }
}
function debounce(func, delay) {
  let debounceTimer;
  return (...args) => {
    clearTimeout(debounceTimer);
    const that = this;
    debounceTimer = setTimeout(() => func.apply(that, args), delay);
  };
}

function throttle(func, delay) {
  let debounceTimer;
  return (...args) => {
    const that = this;
    if (!debounceTimer) {
      debounceTimer = setTimeout(() => {
        func.apply(that, args);
        debounceTimer = null;
      }, delay);
    }
  };
}

const DebouncedHandleClick = debounce(handleClick('Debounced'), 500);
const ThrottledHandleClick = throttle(handleClick('Throttled'), 500);

const button1 = document.createElement('button');
const button2 = document.createElement('button');
button1.innerHTML = 'Debounce action dispatcher';
button1.addEventListener('click', DebouncedHandleClick);
button2.innerHTML = 'Throttle action dispatcher';
button2.addEventListener('click', ThrottledHandleClick);
appDiv.append(button1);
appDiv.append(button2);