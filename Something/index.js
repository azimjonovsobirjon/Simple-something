let allImg = document.querySelectorAll('img')
let activeElement = 'first';
function defaultFunction() {
    allImg[0].style.display = 'block'
    allImg[1].style.display = 'none'
    allImg[2].style.display = 'none'
}
defaultFunction()

function hoverMouse1(type){
    if(type === 'click'){
        activeElement = 'first'
    }
    defaultFunction()
}
function hoverMouse2(type){
    if(type === 'click'){
        activeElement = 'second'
    }
    allImg[0].style.display = 'none'
    allImg[1].style.display = 'block'
    allImg[2].style.display = 'none'
}
function hoverMouse3(type){
    if(type === 'click'){
        activeElement = 'third'
    }
    allImg[0].style.display = 'none'
    allImg[1].style.display = 'none'
    allImg[2].style.display = 'block'
}

function leaveMouse(){
    if(activeElement === 'first'){
        defaultFunction()
    }
    else if(activeElement === 'second'){
        allImg[0].style.display = 'none'
        allImg[1].style.display = 'block'
        allImg[2].style.display = 'none'
    }
    else{
        allImg[0].style.display = 'none'
        allImg[1].style.display = 'none'
        allImg[2].style.display = 'block'
    }
}