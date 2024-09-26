<script lang="ts">
	export let images: string[] = []; // Array of images for the carousel
	let currentIndex = 0; // Tracks the index of the first visible image
	const visibleImages = 3; // Number of visible images at a time
	const gap = 16; // Gap between the images, you can adjust the spacing here
	const maxIndex = images.length - visibleImages + 1; // Max index that we can move to

	// Move to the next image
	function next() {
		currentIndex = (currentIndex + 1) % maxIndex;
	}

	// Move to the previous image
	function prev() {
		currentIndex = (currentIndex - 1 + maxIndex) % maxIndex;
	}
</script>

<!-- Carousel Container -->
<div class="relative w-full max-w-4xl mx-auto overflow-hidden h-400">
	<!-- Carousel Slides -->
	<div
		class="flex transition-transform duration-700 ease-in-out"
		style="transform: translateX(calc(-{currentIndex} * (100% / {visibleImages} + {gap}px))); gap: {gap}px;"
	>
		{#each images as image, index}
			<div class="carousel-slide w-1/{visibleImages} object-cover w-1/3 flex-shrink-0">
				<img
					src={image}
					alt="Screenshot of Stop Doomscroll"
					class="w-full h-full object-cover rounded-lg border-2 border-black"
				/>
			</div>
		{/each}
	</div>

	<!-- Navigation Buttons -->
	<button
		on:click={prev}
		class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100"
		aria-label="Previous Slide"
	>
		&#10094; <!-- Left Arrow -->
	</button>
	<button
		on:click={next}
		class="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full opacity-75 hover:opacity-100"
		aria-label="Next Slide"
	>
		&#10095; <!-- Right Arrow -->
	</button>
</div>
