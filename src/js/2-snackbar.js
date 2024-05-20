"use strict"


import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


function createPromise(delay, state) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(`✅ Fulfilled promise in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise in ${delay}ms`);
      }
    }, delay);
  });
}

document.querySelector('.form').addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const delay = Number(formData.get('delay'));
  const state = formData.get('state');

  createPromise(delay, state)
    .then(message => {
      iziToast.success({
        title: 'Success',
        message: message,
      });
      console.log(message);
    })
    .catch(message => {
      iziToast.error({
        title: 'Error',
        message: message,
      });
      console.log(message);
    });
});