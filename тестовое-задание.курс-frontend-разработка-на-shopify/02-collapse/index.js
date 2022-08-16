const collapsibleButtonVisible = document.querySelector('.collapsible__action--visible');
const collapsibleButtonHidden = document.querySelector('.collapsible__action--hidden');
const collapsibleContent = document.querySelector('.collapsible__content');

const durationAnimation = 3000

window.addEventListener('load', () => {
    collapsibleButtonHidden.style.pointerEvents = "none";
    collapsibleButtonHidden.style.color = "red"
    collapsibleButtonVisible.style.color = "green"
})

const hideKeyframes = new KeyframeEffect(
    collapsibleContent, 
    [
        { opacity: '1'},
        { opacity: '0'},
        { opacity: '0'},
        { opacity: '1'}
    ], 
    { 
        duration: durationAnimation,
        fill: 'forwards' 
    }
  );

const hideAnimation = new Animation(hideKeyframes, document.timeline);


const showText = () => {
    collapsibleButtonHidden.style.pointerEvents = "none";
    collapsibleButtonVisible.style.pointerEvents = "none";
    hideAnimation.play()
    setTimeout(()=> {
        hideAnimation.pause();
        collapsibleButtonHidden.style.pointerEvents = "auto";
        collapsibleButtonHidden.style.color = "green"
        collapsibleButtonVisible.style.color = "red"
    }, durationAnimation / 2)
}

const hideText = () => {
    collapsibleButtonHidden.style.pointerEvents = "none";
    collapsibleButtonVisible.style.pointerEvents = "none";
    hideAnimation.play()
    setTimeout(()=> {
        hideAnimation.pause();
        collapsibleButtonVisible.style.pointerEvents = "auto";
        collapsibleButtonHidden.style.color = "red"
        collapsibleButtonVisible.style.color = "green"
    }, durationAnimation / 2)
    
}

collapsibleButtonVisible.addEventListener('click', showText)
collapsibleButtonHidden.addEventListener('click', hideText)


