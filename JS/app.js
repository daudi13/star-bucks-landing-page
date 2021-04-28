function imgSlider(anything) {
    document.querySelector('.coffee').src = anything;
}

function changeArcColor(color, transition) {
    const theArc = document.querySelector('.arcs');
    theArc.style.background = color;
    theArc.style.transition = transition
} 