
function Slider(slider){
    if (!(slider instanceof Element)) {
        throw new Error('No slider passed in!');
    }
    // create some variables for working with  the slider

    let current;
    let prev;
    let next;

    let sliderTitle;

    // select the elements needed for the sliders

    const slides = slider.querySelector('.slides');
    const prevButton = document.querySelector('.goToPrev');
    const nextButton = document.querySelector('.goToNext');

    function startSlider(){
        current = slider.querySelector('.current') || slides.firstElementChild;
        prev = current.previousElementSibling || slides.lastElementChild;
        next = current.nextElementSibling || slides.firstElementChild;

        // console.log({current, prev, next});
        
    }

    function applyClasses(){
        current.classList.add('current');
        prev.classList.add('prev');
        next.classList.add('next');

        current.querySelector('.slider-title').classList.add('animation-pop-in__title');
        current.querySelector('.hero-title').classList.add('animation-pop-in__ctx');
        current.querySelector('.hero-sub').classList.add('animation-pop-in__ctx');
        current.querySelector('.hero-button').classList.add('animation-pop-in__btn');
    }


    function move(direction){
        // first strip all the classes off the current slide
        const classesToRemove = ['prev', 'current', 'next'];
        
        prev.classList.remove(...classesToRemove);
        current.classList.remove(...classesToRemove);
        next.classList.remove(...classesToRemove);

        current.querySelector('.slider-title').classList.remove('animation-pop-in__title');
        current.querySelector('.hero-title').classList.remove('animation-pop-in__ctx');
        current.querySelector('.hero-sub').classList.remove('animation-pop-in__ctx');
        current.querySelector('.hero-button').classList.remove('animation-pop-in__btn');

        if(direction === 'back') {
            // make a new array of the values, and destructure them over and 
            // into the prev, current and next variables
            [prev, current, next] = [prev.previousElementSibling || slides.lastElementChild, prev, current];
            
        } else {
            [prev, current, next] = [current, next, next.nextElementSibling || slides.firstElementChild];
        }
        
        current.querySelector('.slider-title').classList.add('animation-pop-in__title');
        current.querySelector('.hero-title').classList.add('animation-pop-in__ctx');
        current.querySelector('.hero-sub').classList.add('animation-pop-in__ctx');
        current.querySelector('.hero-button').classList.add('animation-pop-in__btn');
        
        applyClasses();
    }

    

    // when this slider is created, run the start slider function
    startSlider();
    applyClasses();
    // Add event listeners
    prevButton.addEventListener('click', () => move('back'));
    nextButton.addEventListener('click', move);
}

const mainSlider = Slider(document.querySelector('.hero-slider'));