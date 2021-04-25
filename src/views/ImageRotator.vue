<template>
  <div>

    <base-header class="pb-6 pb-8 pt-5 pt-md-8">
    </base-header>

      <b-container fluid class="mt--7">
        <div class="carousel" data-gap="25">
        <figure>
          <img src="http://frontend.kerjajarakjauh.id/img/kat_1.jpg" alt="">
          <img src="http://frontend.kerjajarakjauh.id/img/kat_2.jpg" alt="">
          <img src="http://frontend.kerjajarakjauh.id/img/kat_3.jpg" alt="">
          <img src="http://frontend.kerjajarakjauh.id/img/kat_4.jpg" alt="">
        </figure>
        <nav>
          <button class="nav prev">Prev</button>
          <button class="nav next">Next</button>
        </nav>
      </div>
    </b-container>
  </div>
</template>
<script>
  export default {
    components: {
    },
  };

  window.addEventListener('load', () => {
	var
		carousels = document.querySelectorAll('.carousel')
	;

	for (var i = 0; i < carousels.length; i++) {
		carousel(carousels[i]);
	}
});

function carousel(root) {
	var
		figure = root.querySelector('figure'),
		nav = root.querySelector('nav'),
		images = figure.children,
		n = images.length,
		gap = root.dataset.gap || 0,
		bfc = 'bfc' in root.dataset,
		
		theta =  2 * Math.PI / n,
		currImage = 0
	;
	
	setupCarousel(n, parseFloat(getComputedStyle(images[0]).width));
	window.addEventListener('resize', () => { 
		setupCarousel(n, parseFloat(getComputedStyle(images[0]).width)) 
	});

	setupNavigation();

	function setupCarousel(n, s) {
		var	
			apothem = s / (2 * Math.tan(Math.PI / n))
		;
		
		figure.style.transformOrigin = `50% 50% ${- apothem}px`;

		for (var i = 0; i < n; i++)
			images[i].style.padding = `${gap}px`;
		for (i = 1; i < n; i++) {
			images[i].style.transformOrigin = `50% 50% ${- apothem}px`;
			images[i].style.transform = `rotateY(${i * theta}rad)`;
		}
		if (bfc)
			for (i = 0; i < n; i++)
				 images[i].style.backfaceVisibility = 'hidden';
		
		rotateCarousel(currImage);
	}

	function setupNavigation() {
		nav.addEventListener('click', onClick, true);
		
		function onClick(e) {
			e.stopPropagation();
			
			var t = e.target;
			if (t.tagName.toUpperCase() != 'BUTTON')
				return;
			
			if (t.classList.contains('next')) {
				currImage++;
			}
			else {
				currImage--;
			}
			
			rotateCarousel(currImage);
		}
			
	}

	function rotateCarousel(imageIndex) {
		figure.style.transform = `rotateY(${imageIndex * -theta}rad)`;
	}
	
}
</script>
<style lang="scss" scoped>
.el-table .cell{
  padding-left: 0px;
  padding-right: 0px;
}

body {
	margin: 0;
	font-family: 'Roboto', sans-serif;
	font-size: 16px;
}

h1 {
  text-align: center;
  margin-bottom: 1.5em;
}

h2 {
	text-align: center;
	color: #555;
  margin-bottom: 0;
}

// Carousel configuration parameters
$item-width: 40%; // Now we can use percentages!
$item-separation: 0px; // This now is set with Js
$viewer-distance: 500px;

.carousel {
	padding: 20px;

	perspective: $viewer-distance;
	overflow: hidden;
	
	display: flex;
	flex-direction: column;
	align-items: center;
	> * {
		flex: 0 0 auto;
	}
	
	figure {
		margin: 0;
		
		width: $item-width;
		transform-style: preserve-3d;
		transition: transform 0.5s;
		
		img {
			width: 100%;
			box-sizing: border-box;
			padding: 0 $item-separation / 2;
			
			&:not(:first-of-type) {
				position: absolute;
				left: 0;
				top: 0;
			}
		}
	}
	
	nav {
		display: flex;
		justify-content: center;
		margin: 20px 0 0;
		
		button {
			flex: 0 0 auto;
			margin: 0 5px;
			
			cursor: pointer;
			
			color: #333;
			background: none;
			border: 1px solid;
			letter-spacing: 1px;
			padding: 5px 10px;
		}
	}
	
}
</style>
