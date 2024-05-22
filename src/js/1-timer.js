"use strict"


// Імпорт бібліотек
import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let userSelectedDate;
let intervalId;

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}


function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}


flatpickr("#datetime-picker", {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      iziToast.warning({
        title: 'Warning',
        message: 'Please choose a date in the future',
      });
      document.querySelector('[data-start]').disabled = true;
    } else {
      userSelectedDate = selectedDate;
      document.querySelector('[data-start]').disabled = false;
    }
  },
});


document.querySelector('[data-start]').addEventListener('click', () => {

  document.querySelector('#datetime-picker').disabled = true;
  document.querySelector('[data-start]').disabled = true;

  const timerFields = document.querySelectorAll('.value');
  const intervalId = setInterval(() => {
    const timeLeft = userSelectedDate - new Date();
    if (timeLeft <= 0) {
      clearInterval(intervalId);
      timerFields.forEach(field => field.textContent = '00');

      document.querySelector('#datetime-picker').disabled = false;
      document.querySelector('[data-start]').disabled = false;
      return;
    }
    
    const timeComponents = convertMs(timeLeft);
    timerFields[0].textContent = addLeadingZero(timeComponents.days);
    timerFields[1].textContent = addLeadingZero(timeComponents.hours);
    timerFields[2].textContent = addLeadingZero(timeComponents.minutes);
    timerFields[3].textContent = addLeadingZero(timeComponents.seconds);
  }, 1000);
});