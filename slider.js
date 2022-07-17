const $=document.querySelector.bind(document);
const $$=document.querySelectorAll.bind(document);
window.addEventListener("load" , function(){
	const slider = document.querySelector(".slider");	
	const sliderMain = document.querySelector(".slider-main");	
	const sliderItems = document.querySelectorAll(".slider-item");	
	const prevBtn = document.querySelector(".slider-prev");	
	const nextvBtn = document.querySelector(".slider-next");	
	const dotItem = document.querySelectorAll(".slider-dot-item");	
	const sliderItemWidth = sliderItems[0].offsetWidth;
	const sliderLength = sliderItems.length;
	let postionX = 0;
	let index = 0;
	nextvBtn.addEventListener("click",function() {
		handleChangeSlide(1)
	}	);
	prevBtn.addEventListener("click",function() {
		handleChangeSlide(-1)
	}	);
	function handleChangeSlide(direction) {
		if(direction === 1){
			index++;
			if(index >= sliderLength){
					index = sliderLength;
					return
			}
	
			postionX = postionX -sliderItemWidth;
			sliderMain.style = `transform:translateX(${postionX}px)`
			}

		
		else if( direction === -1 ){
			index--;
			if(index <= 0) {
				index = 0;
				return 	}
			postionX = postionX + sliderItemWidth;
			sliderMain.style = `transform:translateX(${postionX}px)`
		
}
	}
});

