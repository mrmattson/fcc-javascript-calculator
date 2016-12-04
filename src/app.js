function autorun()
{
  calculatorSetup();
}
if (document.addEventListener) document.addEventListener("DOMContentLoaded", autorun, false);
else if (document.attachEvent) document.attachEvent("onreadystatechange", autorun);
else window.onload = autorun;

var calculatorSetup = function () {
  var calcButtons = document.getElementsByClassName('calc-button');
  for (element of calcButtons) {
    element.addEventListener('click', buttonPress);
  }
};

var buttonPress = function (event) {
  var buttonValue = getButtonValue.call(this);
  console.log(buttonValue + ' button pressed');
  document.querySelector('#output').innerText = buttonValue;
  // addStepToOperation();
};

var getButtonValue = function () {
  var buttonId = this.id;

  // switch buttonId
  //     when 'acb' then buttonValue = 'clear'
  //     when 'ceb' then buttonValue = 'clear'
  //     when 'zer' then buttonValue = 0
  //     when 'one' then buttonValue = 1
  //     when 'two' then buttonValue = 2
  //     when 'thr' then buttonValue = 3
  //     when 'fou' then buttonValue = 4
  //     when 'fiv' then buttonValue = 5
  //     when 'six' then buttonValue = 6
  //     when 'sev' then buttonValue = 7
  //     when 'eig' then buttonValue = 8
  //     when 'nin' then buttonValue = 9
  //     when 'dec' then buttonValue = 'dec'
  //     when 'plu' then buttonValue = 'plu'
  //     when 'sub' then buttonValue = 'sub'
  //     when 'mul' then buttonValue = 'mul'
  //     when 'div' then buttonValue = 'div'
  //     when 'equ' then buttonValue = 'equ'

  var buttonValue;

  switch (buttonId) {
    case 'acb':
      buttonValue = 'clear';
      break;
    case 'ceb':
      buttonValue = 'clear';
      break;
    case 'zer':
      buttonValue = 0;
      break;
    case 'one':
      buttonValue = 1;
      break;
    case 'two':
      buttonValue = 2;
      break;
    case 'thr':
      buttonValue = 3;
      break;
    case 'fou':
      buttonValue = 4;
      break;
    case 'fiv':
      buttonValue = 5;
      break;
    case 'six':
      buttonValue = 6;
      break;
    case 'sev':
      buttonValue = 7;
      break;
    case 'eig':
      buttonValue = 8;
      break;
    case 'nin':
      buttonValue = 9;
      break;
    case 'dec':
      buttonValue = 'dec';
      break;
    case 'plu':
      buttonValue = 'plu';
      break;
    case 'sub':
      buttonValue = 'sub';
      break;
    case 'mul':
      buttonValue = 'mul';
      break;
    case 'div':
      buttonValue = 'div';
      break;
    case 'equ':
      buttonValue = 'equ';
  }

  return buttonValue
};
