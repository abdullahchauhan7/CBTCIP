

let iconEl = document.querySelector('#icon');
let header = document.querySelector('#header')
let header1 = document.querySelector('#home')
let section1 = document.querySelector('#about-section')
let section2 = document.querySelector('#services-area')
let section3 = document.querySelector('#projects-area')
let section4 = document.querySelector('#contact-page')
let section5 = document.querySelector('#list-color')


iconEl.addEventListener('click', ()=>{
     header1.classList.toggle('dark-mode');
})
iconEl.addEventListener('click', ()=>{
     section5.classList.toggle('dark-mode');
})
iconEl.addEventListener('click', ()=>{
     header.classList.toggle('dark-mode');
})
iconEl.addEventListener('click', ()=>{
     section1.classList.toggle('dark-mode');
})
iconEl.addEventListener('click', ()=>{
     section2.classList.toggle('dark-mode');
})
iconEl.addEventListener('click', ()=>{
     section3.classList.toggle('dark-mode');
})
iconEl.addEventListener('click', ()=>{
     section4.classList.toggle('dark-mode');
})