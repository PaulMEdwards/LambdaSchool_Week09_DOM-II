// Your code goes here
// body.style.animationPlayState = 'paused';
// body.style.transition = 'all 5s ease-in-out';

const body = document.querySelector('body');
window.addEventListener('load', (e) => {
  console.log('page is fully loaded');
  body.style.background = 'linear-gradient(white, #BBD1EA, #507DBC)';
});

const nav_links = document.querySelectorAll('.nav-link');
nav_links.forEach((a) => {
  a.addEventListener('click', (e) => {
    console.log('link was clicked!');
    e.preventDefault();
  });
  a.addEventListener('focusin', (e) => {
    a.style.transform = 'scale(1.25)';
    a.style.transition = 'transform 0.125s ease-in-out';
  });
  a.addEventListener('focusout', (e) => {
    a.style.transform = 'scale(1.0)';
    a.style.transition = 'transform 0.125s ease-in-out';
  });
});

const nav = document.querySelector('nav');
nav.addEventListener('click', (e) => {
  e.stopPropagation();
  console.log('event propagation stopped!');
});

const headerImg = document.querySelector('header.intro > img');
headerImg.addEventListener('click', (e) => {
  headerImg.src = 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&h=240&q=80';
});
headerImg.addEventListener('dblclick', (e) => {
  headerImg.src = 'img/fun-bus.jpg';
});

const contentImgs = document.querySelectorAll('div.img-content > img');
contentImgs.forEach((img) => {
  img.addEventListener('mouseover', (e) => {
    img.style.transform = 'scale(1.15)';
    img.style.transition = 'transform 0.5s ease-in-out';
  });
  
  img.addEventListener('mouseout', (e) => {
    img.style.transform = 'scale(1.0)';
    img.style.transition = 'transform 0.5s ease-in-out';
  });
});

const destinationImg = document.querySelector('section.content-destination > img');
destinationImg.addEventListener('click', (e) => {
  destinationImg.src = 'https://images.unsplash.com/photo-1437719417032-8595fd9e9dc6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&h=200&q=80';
});
destinationImg.addEventListener('dblclick', (e) => {
  destinationImg.src = 'img/destination.jpg';
});

const buttons = document.querySelectorAll('div.btn');
buttons.forEach((b) => {
  b.addEventListener('dblclick', (e) => {
    alert("Please do not double-click the buttons as doing so may result in duplicate transactions!");
  })
});