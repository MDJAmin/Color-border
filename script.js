"use strict";

const container=document.querySelector('.container')

const colors=[ '#ff0000' , '#ff9d00' , '#1aff00' , '#00eeff' , '#1100ff']

const SQUARE=990

const getColorRandom=()=>{
    return colors[Math.floor(Math.random()*colors.length)]
}

const addColor=(e)=>{
    const color=getColorRandom()
    e.style.backgroundColor=color
    e.style.boxShadow=`0 0 20px ${color}`
}

const removeColor=(e)=>{
    e.style.backgroundColor='#272727'
    e.style.boxShadow=`0 0 2px #343434`
}

for(let i=0 ; i<SQUARE ; i++){
    const square=document.createElement('div')
    square.classList.add('square')
    container.appendChild(square)
    square.addEventListener('mouseover' , ()=> addColor(square))
    square.addEventListener('mouseout' , ()=> removeColor(square))
}