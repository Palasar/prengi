'Use strict';
window.addEventListener('DOMContentLoaded', () => {

//slider 

    function generalSlider(num) {

        const   
            slider = document.querySelectorAll('.solution__slider'),
            windowSlider = slider[num].querySelector('.solution__slider_wrapper'),
            sliderField = slider[num].querySelector('.solution__slider_inner'),
            slides = slider[num].querySelectorAll('.solution__slider_img'),
            widthSlide = deleteNotDigital(window.getComputedStyle(windowSlider).width),
            nextSlide = slider[num].querySelector('.solution__slider_next'),
            prevSlide = slider[num].querySelector('.solution__slider_prev'),
            copyLastSlide = slides[slides.length - 1].cloneNode(true),
            copyFirstSlide = slides[0].cloneNode(true);
            
        let index = 0,
            positInit = -widthSlide,
            allowShift = true;

        sliderField.style.left = `${positInit}px`;
        sliderField.style.width = `${widthSlide * slides.length}px`;
        windowSlider.style.overflow = 'hidden';
        
        sliderField.append(copyFirstSlide);
        sliderField.prepend(copyLastSlide);

        function deleteNotDigital(str){
            return Math.round(+str.replace(/[A-Za-z]/g, ''));
        }
            
        function shiftSlide(dir) {
            if(allowShift){
                sliderField.classList.add('shifting');

                positInit = sliderField.offsetLeft;

                if(dir == 1){
                    ++index;
                    sliderField.style.left = `${positInit - widthSlide}px`;
                }else if(dir == -1){
                    --index;
                    sliderField.style.left = `${positInit + widthSlide}px`;
                }
            }
            allowShift = false;
        }

        function checkIndex(){
            sliderField.classList.remove('shifting');
            
            if(index == slides.length){
                index = 0;
                positInit = -widthSlide;
                sliderField.style.left = `${positInit}px`;
            }else if(index == -1){
                index = slides.length - 1;
                positInit = -widthSlide;
                sliderField.style.left = `${positInit * slides.length}px`;
            }
            allowShift = true;
        }

        nextSlide.addEventListener('click', () => shiftSlide(1));
        prevSlide.addEventListener('click', () => shiftSlide(-1));
        sliderField.addEventListener('transitionend', checkIndex);

    }
    generalSlider(0);

    //tabs

    const 
        tabsBtn = document.querySelectorAll('.solution__tab_nav li'),
        tabsItem = document.querySelectorAll('.solution__slider');

    tabsBtn.forEach((btn, index) => {
        btn.setAttribute('data-tabs', index);
        btn.addEventListener('click', toggleTabs);
    });

    function toggleTabs (e) {
        tabsBtn.forEach(btn => btn.classList.remove("active"));
        e.target.classList.add('active');

        const valueAtr = e.target.getAttribute('data-tabs');
        tabsItem.forEach(item => item.classList.remove('solution__slider-active'));
        tabsItem[valueAtr].classList.add('solution__slider-active');

        generalSlider(valueAtr);
    }
});


