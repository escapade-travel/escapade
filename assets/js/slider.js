var Slider = function(id) {
	var index = 0;
	var slider = document.getElementById(id);
	var allSlides = slider.querySelectorAll('.slide');
	var number = allSlides.length;
    var timer;
    init();
	
	function showSlide(currentIndex) {
		for(var i=0; i<number; i++) {
			if(i != currentIndex) {
                allSlides[i].style.display = "none";
			} else {
                allSlides[i].style.display = "block";
			}
			
		}
	}
	
	function showPrev() {
		index <= 0 ? (index = number -1) : (index -= 1);
		showSlide(index);
		
	}
	
	function showNext() {
		index >= number -1 ? (index = 0) : (index += 1);
		showSlide(index);
	}
    
    function init() {
        var prev = slider.querySelector('.prev');
        var next = slider.querySelector('.next');	
        prev.addEventListener('click', showPrev);
        next.addEventListener('click', showNext);
    }
    
    return {
        start: function() {
            timer = setInterval(showNext, 2500);
        },
        stop: function() {
            clearInterval(timer);
        }
    }
}

