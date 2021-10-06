"use strict";

// loading DOM content
document.addEventListener("DOMContentLoaded", start);

// variables for elements
let currentColor = "grey";
let back;
let hole;
let middle;
let topBack;
let brand;
let mesh;
let laces;
let lacesBottom;
let bottom;
let middleHalf;
let tip;

//fetching SVG

async function start() {
  let response = await fetch("assets/assets_shoe.svg");
  let mySvgData = await response.text();
  document.querySelector("section").innerHTML = mySvgData;
  back = document.querySelector("#back");
  hole = document.querySelector("#hole");
  middle = document.querySelector("#middle");
  topBack = document.querySelector("#topBack");
  brand = document.querySelector("#brand");
  mesh = document.querySelector("#mesh");
  laces = document.querySelector("#laces");
  lacesBottom = document.querySelector("#lacesBottom");
  bottom = document.querySelector("#bottom");
  middleHalf = document.querySelector("#middleHalf");
  tip = document.querySelector("#tip");
  init();
}

function init() {
  back.addEventListener("click", setColor);
  hole.addEventListener("click", setColor);
  middle.addEventListener("click", setColor);
  topBack.addEventListener("click", setColor);
  brand.addEventListener("click", setColor);
  mesh.addEventListener("click", setColor);
  laces.addEventListener("click", setColor);
  lacesBottom.addEventListener("click", setColor);
  bottom.addEventListener("click", setColor);
  middleHalf.addEventListener("click", setColor);
  tip.addEventListener("click", setColor);

  document.querySelectorAll(".color-btn").forEach((element) => {
    // element.style.backgroundColor = `hsl(${i*70}, 100%, 76%)`
    element.addEventListener("click", (event) => {
      console.log(event.target.style.backgroundColor);
      currentColor = event.target.style.backgroundColor;
      // currentColor = event.target.dataset.bgcolor;
    });
  });
}

function setColor(event) {
  // event.target.dataset.bgcolor = currentColor;
  console.log(event.target.parentElement);
  event.target.style.fill = currentColor;
  const parent = event.target.parentElement;

  document.querySelectorAll(`#${parent.id} .cls-2`).forEach((child) => {
    child.style.fill = currentColor;
  });
}
