document.addEventListener('DOMContentLoaded', function() {
    changeSlide(1);
    document.querySelector('.dot').classList.add('active');
    setInterval(function() {
        var activeSlide = document.querySelector('.slide.active');
        var activeIndex = Array.from(activeSlide.parentNode.children).indexOf(activeSlide);
        var nextIndex = (activeIndex + 1) % document.querySelectorAll('.slide').length;
        changeSlide(nextIndex + 1); 
    }, 6000);
});

function changeSlide(slideIndex) {
    var slides = document.querySelectorAll('.slide');
    var dots = document.querySelectorAll('.dot');
    slides.forEach(function(slide) {
        slide.style.display = 'none';
        slide.classList.remove('active');
    });
    dots.forEach(function(dot) {
        dot.classList.remove('active');
    });
    slides[slideIndex - 1].style.display = 'block';
    slides[slideIndex - 1].classList.add('active');
    dots[slideIndex - 1].classList.add('active');
}


function updateCountdown() {
    var countdownElement = document.querySelector('.countdowntimer');
    var timeLeft = countdownElement.innerHTML.split(':');
    var hours = parseInt(timeLeft[1]);
    var minutes = parseInt(timeLeft[2]);
    var seconds = parseInt(timeLeft[3]);
    
    if (seconds > 0) {
        seconds--;
    } else {
        if (minutes > 0) {
            minutes--;
            seconds = 59;
        } else {
            if (hours > 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                clearInterval(timerInterval); // Stop the timer when it reaches zero
                // You can add additional actions here when the timer reaches zero
            }
        }
    }
    
    countdownElement.innerHTML = 'TIME LEFT : ' + hours.toString().padStart(2, '0') + 'h : ' + minutes.toString().padStart(2, '0') + 'm : ' + seconds.toString().padStart(2, '0') + 's';
}

// Call the updateCountdown function every second
var timerInterval = setInterval(updateCountdown, 1000);

