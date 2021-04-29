function imgSlider(anything) {
    document.querySelector('.coffee').src = anything;
    const coffee = document.querySelector('.coffee');
}

function changeArcColor(color, transition) {
    const theArc = document.querySelector('.arcs');
    theArc.style.background = color;
    theArc.style.transition = transition;
} 